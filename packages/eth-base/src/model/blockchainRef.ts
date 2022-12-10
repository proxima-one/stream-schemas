import { Hash } from "./hash";

export class BlockchainRef {
  public constructor(
    public readonly blockNumber?: number,
    public readonly blockHash?: Hash,
    public readonly txHash?: Hash
  ) {
  }
}
