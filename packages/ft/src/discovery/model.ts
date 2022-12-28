import { Address } from "@proximaone/stream-schema-eth-base";
import BN from "bn.js";

export type Event = Token;

export class Token {
  type = "token" as const;

  public constructor(
    public readonly address: Address,
    public readonly symbol: string,
    public readonly name: string,
    public readonly totalSupply: BN,
    public readonly decimals?: number,
  ) {
  }
}
