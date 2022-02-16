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
  type: "npm",
  name: "fungible-token.streams.proxima.one",
  package: "@proxima-one/stream-schema-fungible-token",
  serdes: serializers.json<FungibleTokenStreamEvent>(),
  version: "0.1.0",
}

export type FungibleTokenDiscoveryStreamEvent =
  | events.NewToken & {
  ref?: BlockchainReference
};

export const fungibleTokenDiscovery: EventStreamSchema<FungibleTokenDiscoveryStreamEvent> = {
  type: "npm",
  name: "fungible-token-discovery.streams.proxima.one",
  package: "@proxima-one/stream-schema-fungible-token",
  serdes: serializers.json<FungibleTokenDiscoveryStreamEvent>(),
  version: "0.1.0",
}
