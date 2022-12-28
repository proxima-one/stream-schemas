import { Serdes } from "@proximaone/stream-schema-base";
import { Approval, Event, eventMatcher, Transfer } from "../../model";
import { Address, BlockchainRef, Hash } from "@proximaone/stream-schema-eth-base";
import BN from "bn.js";

interface TransferJson {
  type: "transfer";

  token: string;
  from: string;
  to: string;
  value: string;
}

interface ApprovalJson {
  type: "approval";

  token: string;
  owner: string;
  spender: string;
  value: string;
}

type EventJson = DomainEventJson & BlockchainRefJson;

type DomainEventJson = ApprovalJson | TransferJson;

type BlockchainRefJson = {
  tx?: string;
  number?: number;
  hash?: string;
};

const domainToJson = eventMatcher<DomainEventJson>({
  approval: e => ({
    type: "approval",
    token: e.token.toHexString(),
    owner: e.owner.toHexString(),
    spender: e.spender.toHexString(),
    value: e.value.toString(10),
  }),
  transfer: e => ({
    type: "transfer",
    token: e.token.toHexString(),
    from: e.from.toHexString(),
    to: e.to.toHexString(),
    value: e.value.toString(10)
  })
});

const fromJsonFunc = (json: unknown): Event => {
  const optimistic = json as EventJson;
  const ref = new BlockchainRef(
    optimistic.number,
    optimistic.hash ? Hash.fromHexString(optimistic.hash) : undefined,
    optimistic.tx ? Hash.fromHexString(optimistic.tx) : undefined,
  );

  if (optimistic.type == "transfer")
    return new Transfer(
      Address.fromHexString(optimistic.token),
      Address.fromHexString(optimistic.from),
      Address.fromHexString(optimistic.to),
      new BN(optimistic.value),
      ref
    );

  if (optimistic.type == "approval")
    return new Approval(
      Address.fromHexString(optimistic.token),
      Address.fromHexString(optimistic.owner),
      Address.fromHexString(optimistic.spender),
      new BN(optimistic.value),
      ref
    );

  throw new Error(`unknown event type ${optimistic["type"]}`);
}

/*
Minified json serializer
 */
export const JsonSerializer: Serdes<Event> = {
  serialize: (val: Event) => Buffer.from(JSON.stringify({
    ...domainToJson(val),
    tx: val.ref.txHash?.toHexString(),
    number: val.ref?.blockNumber,
    hash: val.ref?.blockHash?.toHexString(),
  })),
  deserialize: (buffer: Buffer) => fromJsonFunc(JSON.parse(buffer.toString())),
};

