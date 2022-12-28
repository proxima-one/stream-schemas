import { Amount, Address, TxRefStr as TxRefBase, JsonObject, serializers } from "@proximaone/stream-schema-base";

export type TxRef = Pick<TxRefBase, "blockNumber" | "blockHash" | "txHash">;

export interface AccountBalanceUpdateEvent extends JsonObject {
  chainId: string;
  tokenId: string;
  account: Address;
  currentAmount: Amount;
  // The last transaction due to which the balance had changed.
  // It may be an uncled transaction if a rollback happens.
  lastChange?: TxRef;
}

export const balanceUpdate = {
  serdes: serializers.json<AccountBalanceUpdateEvent>()
}
