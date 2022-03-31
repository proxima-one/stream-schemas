import * as events from "./events";
import { EventStreamSchema, serializers } from "@proximaone/stream-schema-base";
import { ChainReference } from "./model";

export type FungibleTokenStreamEvent =
  | events.NewToken
  | events.Approval
  | events.Transfer & {
  ref?: ChainReference
};

export const fungibleToken: EventStreamSchema<FungibleTokenStreamEvent> = {
  name: "fungible-token.streams.proxima.one",
  serdes: serializers.json<FungibleTokenStreamEvent>(),
  version: "0.1.0",
}

export type FungibleTokenDiscoveryStreamEvent =
  | events.NewToken & {
  ref?: ChainReference
};

export const fungibleTokenDiscovery: EventStreamSchema<FungibleTokenDiscoveryStreamEvent> = {
  name: "fungible-token-discovery.streams.proxima.one",
  serdes: serializers.json<FungibleTokenDiscoveryStreamEvent>(),
  version: "0.1.0",
}
