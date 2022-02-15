import * as events from "./events";
import { EventStreamSchema, serializers } from "@proxima-one/stream-schema-base";
import { BlockchainReference } from "./model";

export type FungibleTokenStreamEvent =
  | events.NewToken
  | events.Approval
  | events.Transfer & {
  ref?: BlockchainReference
};

export const fungibleToken: EventStreamSchema<FungibleTokenStreamEvent> = {
  name: "fungible-token.streams.proxima.one",
  serdes: serializers.json<FungibleTokenStreamEvent>(),
  version: "0.1",
}

export type FungibleTokenDiscoveryStreamEvent =
  | events.NewToken & {
  ref?: BlockchainReference
};

export const fungibleTokenDiscovery: EventStreamSchema<FungibleTokenDiscoveryStreamEvent> = {
  name: "fungible-token-discovery.streams.proxima.one",
  serdes: serializers.json<FungibleTokenDiscoveryStreamEvent>(),
  version: "0.1",
}
