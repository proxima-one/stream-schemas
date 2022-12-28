import { Serdes } from "@proximaone/stream-schema-base";
import { Token, Event } from "../../model";
import { Address } from "@proximaone/stream-schema-eth-base";
import BN from "bn.js";

interface TokenJson {
  address: string;
  symbol: string;
  name: string;
  totalSupply: string;
  decimals?: number;
}

type EventJson = TokenJson

const domainToJson = (token: Token): TokenJson => ({
  address: token.address.toHexString(),
  symbol: token.symbol,
  name: token.name,
  totalSupply: token.totalSupply.toString(10),
  decimals: token.decimals
});

const fromJsonFunc = (json: unknown): Token => {
  const optimistic = json as any;

  return new Token(
    Address.fromHexString(optimistic.address),
    optimistic.symbol,
    optimistic.name,
    new BN(optimistic.totalSupply),
    optimistic.decimals
  );
}

export const JsonSerializer: Serdes<Event> = {
  serialize: (val: Event) => Buffer.from(JSON.stringify({
    ...domainToJson(val)
  })),
  deserialize: (buffer: Buffer) => fromJsonFunc(JSON.parse(buffer.toString())),
};

