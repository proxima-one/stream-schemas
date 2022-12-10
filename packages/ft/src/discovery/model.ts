import { Address } from "@proximaone/stream-schema-eth-base";
import BigNumber from "bignumber.js";

export type Event = Token;

export class Token {
  type = "token" as const;

  public constructor(
    public readonly address: Address,
    public readonly symbol: string,
    public readonly name: string,
    public readonly totalSupply: BigNumber,
    public readonly decimals?: number,
  ) {
  }
}
