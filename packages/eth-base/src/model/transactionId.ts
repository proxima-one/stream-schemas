import { Hash } from "./hash";

export class TransactionId {
  public constructor(
    public readonly hash: Hash,
    public readonly index: number
  ) {
  }
}
