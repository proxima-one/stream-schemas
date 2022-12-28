import { Address } from "@proximaone/stream-schema-eth-base";

export type Event = NftCollection;

export class NftCollection {
  type = "nftCollection" as const;

  public constructor(
    public readonly address: Address,
    public readonly symbol: string,
    public readonly name: string
  ) {
  }
}
