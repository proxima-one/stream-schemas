import { Serdes } from "@proximaone/stream-schema-base";
import { NftCollection, Event } from "../../model";
import { Address } from "@proximaone/stream-schema-eth-base";

interface TokenJson {
  address: string;
  symbol: string;
  name: string;
}

type EventJson = TokenJson

const domainToJson = (token: NftCollection): TokenJson => ({
  address: token.address.toHexString(),
  symbol: token.symbol,
  name: token.name
});

const fromJsonFunc = (json: unknown): NftCollection => {
  const optimistic = json as any;

  return new NftCollection(
    Address.fromHexString(optimistic.address),
    optimistic.symbol,
    optimistic.name
  );
}

export const JsonSerializer: Serdes<Event> = {
  serialize: (val: Event) => Buffer.from(JSON.stringify({
    ...domainToJson(val)
  })),
  deserialize: (buffer: Buffer) => fromJsonFunc(JSON.parse(buffer.toString())),
};

