import * as events from "./events";
import { EventStreamSchema, serializers, TxRefStr as TxRefBase } from "@proximaone/stream-schema-base";

export type TxRef = Pick<TxRefBase, "blockNumber" | "blockHash" | "txHash">;

export type NftStreamEvent = (
  | events.NewNftCollection
  | events.Approval
  | events.ApprovalForAll
  | events.NftSale
  | events.Transfer) & {
  ref?: TxRef
};

export const nft: EventStreamSchema<NftStreamEvent> = {
  name: "nft.streams.proxima.one",
  serdes: serializers.json<NftStreamEvent>(),
  version: "0.1.0",
}
