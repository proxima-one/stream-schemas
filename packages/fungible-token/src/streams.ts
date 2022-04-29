import * as events from "./events";
import { EventStreamSchema, serializers, TxRefStr as TxRefBase } from "@proximaone/stream-schema-base";

export type TxRef = Pick<TxRefBase, "blockNumber" | "blockHash" | "txHash">;

export type FungibleTokenStreamEvent =
  | events.NewToken
  | events.Approval
  | events.Transfer & {
  ref?: TxRef
};

export const fungibleToken: EventStreamSchema<FungibleTokenStreamEvent> = {
  name: "fungible-token.streams.proxima.one",
  serdes: serializers.json<FungibleTokenStreamEvent>(),
  version: "0.1.0",
}

export type NewFungibleTokenStreamEvent =
  | events.NewToken & {
  ref?: TxRef
};

export const newFungibleToken: EventStreamSchema<NewFungibleTokenStreamEvent> = {
  name: "new-tokens.fungible-token.streams.proxima.one",
  serdes: serializers.json<NewFungibleTokenStreamEvent>(),
  version: "0.1.0",
}
