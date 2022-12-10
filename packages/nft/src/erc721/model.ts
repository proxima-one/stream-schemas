import { createPatternMatcher } from "@proximaone/stream-schema-base";
import { Address, BlockchainRef } from "@proximaone/stream-schema-eth-base";

export type Event = Transfer | Approval | ApprovalForAll;

export class Transfer {
  type = "transfer" as const;

  public constructor(
    public readonly collection: Address,
    public readonly tokenNumber: number,
    public readonly from: Address,
    public readonly to: Address,
    public readonly ref: BlockchainRef,
  ) {
  }
}

export class Approval {
  type = "approval" as const;

  public constructor(
    public readonly collection: Address,
    public readonly tokenNumber: number,
    public readonly owner: Address,
    public readonly approved: Address,
    public readonly ref: BlockchainRef,
  ) {
  }
}

export class ApprovalForAll {
  type = "approvalForAll" as const;

  public constructor(
    public readonly collection: Address,
    public readonly owner: Address,
    public readonly operator: Address,
    public readonly ref: BlockchainRef,
  ) {
  }
}
export const eventMatcher = createPatternMatcher<Event>();
