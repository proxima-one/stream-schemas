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

export type NewFungibleTokenStreamEvent =
  | events.NewToken & {
  ref?: ChainReference
};

export const newFungibleToken: EventStreamSchema<NewFungibleTokenStreamEvent> = {
  name: "new-tokens.fungible-token.streams.proxima.one",
  serdes: serializers.json<NewFungibleTokenStreamEvent>(),
  version: "0.1.0",
}
