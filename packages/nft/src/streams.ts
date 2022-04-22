import * as events from "./events";
import { EventStreamSchema, serializers } from "@proximaone/stream-schema-base";
import { ChainReference } from "./model";

export type NftStreamEvent = (
  | events.NewNftCollection
  | events.Approval
  | events.ApprovalForAll
  | events.Sale
  | events.Transfer) & {
  ref?: ChainReference
};

export const nft: EventStreamSchema<NftStreamEvent> = {
  name: "nft.streams.proxima.one",
  serdes: serializers.json<NftStreamEvent>(),
  version: "0.1.0",
}
