import { Amount, Address, JsonObject, Hash, EventStreamSchema, serializers } from "@proximaone/stream-schema-base";

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

export const gasPrices: EventStreamSchema<GasPriceStreamEvent> = {
  name: "gas-prices.streams.proxima.one",
  serdes: serializers.json<GasPriceStreamEvent>(),
  version: "0.1.0",
}
