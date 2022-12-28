import { Amount, Address, JsonObject, Hash, serializers } from "@proximaone/stream-schema-base";

export interface BlockRef extends JsonObject {
  number: number;
  hash: Hash;
}

export interface TransactionInfo extends JsonObject {
  hash: Hash;
  sender: Address;
  receiver?: Address;
  gas: Amount
  gasPrice: Amount;
}

export interface BlockInfo extends JsonObject {
  chainId: string;
  block: BlockRef;
  transactions: TransactionInfo[];
  gasUsed?: Amount;
};

export type GasPriceStreamEvent = BlockInfo;

export const gasPrices = {
  serdes: serializers.json<GasPriceStreamEvent>(),
}
