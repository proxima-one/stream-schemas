import { createPatternMatcher } from "@proximaone/stream-schema-base";
import { Address, BlockchainRef } from "@proximaone/stream-schema-eth-base";
import BigNumber from "bignumber.js";

export type Event = Transfer | Approval;

export class Transfer {
  type = "transfer" as const;

  public constructor(
    public readonly token: Address,
    public readonly from: Address,
    public readonly to: Address,
    public readonly value: BigNumber,
    public readonly ref: BlockchainRef,
  ) {
  }
}

export class Approval {
  type = "approval" as const;

  public constructor(
    public readonly token: Address,
    public readonly owner: Address,
    public readonly spender: Address,
    public readonly value: BigNumber,
    public readonly ref: BlockchainRef,
  ) {
  }
}

export const eventMatcher = createPatternMatcher<Event>();
