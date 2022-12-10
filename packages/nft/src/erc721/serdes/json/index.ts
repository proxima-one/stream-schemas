import { Serdes } from "@proximaone/stream-schema-base";
import { Approval, ApprovalForAll, Event, eventMatcher, Transfer } from "../../model";
import { Address, BlockchainRef, Hash } from "@proximaone/stream-schema-eth-base";

interface TransferJson {
  type: "transfer";

  collection: string;
  tokenNumber: number;
  from: string;
  to: string;
}

interface ApprovalJson {
  type: "approval";

  collection: string;
  tokenNumber: number;
  owner: string;
  approved: string;
}

interface ApprovalForAllJson {
  type: "approvalForAll";

  collection: string;
  owner: string;
  operator: string;
}

type EventJson = DomainEventJson & BlockchainRefJson;

type DomainEventJson = ApprovalJson | TransferJson | ApprovalForAllJson;

type BlockchainRefJson = {
  tx?: string;
  number?: number;
  hash?: string;
};

const domainToJson = eventMatcher<DomainEventJson>({
  approval: e => ({
    type: "approval",
    collection: e.collection.toHexString(),
    tokenNumber: e.tokenNumber,
    owner: e.owner.toHexString(),
    approved: e.approved.toHexString(),
  }),
  transfer: e => ({
    type: "transfer",
    collection: e.collection.toHexString(),
    tokenNumber: e.tokenNumber,
    from: e.from.toHexString(),
    to: e.to.toHexString(),
  }),
  approvalForAll: e => ({
    type: "approvalForAll",
    collection: e.collection.toHexString(),
    owner: e.owner.toHexString(),
    operator: e.operator.toHexString(),
  }),
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
      Address.fromHexString(optimistic.collection),
      optimistic.tokenNumber,
      Address.fromHexString(optimistic.from),
      Address.fromHexString(optimistic.to),
      ref
    );

  if (optimistic.type == "approval")
    return new Approval(
      Address.fromHexString(optimistic.collection),
      optimistic.tokenNumber,
      Address.fromHexString(optimistic.owner),
      Address.fromHexString(optimistic.approved),
      ref
    );


  if (optimistic.type == "approvalForAll")
    return new ApprovalForAll(
      Address.fromHexString(optimistic.collection),
      Address.fromHexString(optimistic.owner),
      Address.fromHexString(optimistic.operator),
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

