import { JsonObject, JsonValue } from "../model/jsonObject";

export type Hash = string;
export type Amount = string;
export type Address = string;

interface TxRefBase<TBlockNumber extends JsonValue> extends JsonObject {
  chain: string;
  blockNumber: TBlockNumber;
  blockHash: Hash;
  txHash: Hash;
  sender: Address;
}

export type TxRef = TxRefBase<number>;
export type TxRefStr = TxRefBase<string>;
