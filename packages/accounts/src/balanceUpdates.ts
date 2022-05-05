import { Amount, Address, TxRefStr as TxRefBase, JsonObject } from "@proximaone/stream-schema-base";

export type TxRef = Pick<TxRefBase, "blockNumber" | "blockHash" | "txHash">;

export interface AccountBalanceUpdateEvent extends JsonObject {
  chainId: string;
  tokenId: string;
  account: Address;
  currentAmount: Amount;
  // The last transaction due to which the balance has changed.
  // It may be an uncled transaction if a rollback happens.
  lastChange?: TxRef;
};
