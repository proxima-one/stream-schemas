import * as events from "./events";
import { EventStreamSchema, serializers } from "@proxima-one/stream-schema-base";

type FungibleTokenStreamEvent =
  | events.NewToken
  | events.Approval
  | events.Transfer;

export const fungibleToken: EventStreamSchema<FungibleTokenStreamEvent> = {
  type: "npm",
  id: "@proxima-one/stream-schema-fungible-token",
  name: "ft.streams.proxima.one",
  serdes: serializers.json<FungibleTokenStreamEvent>(),
  version: "0.1.0",
}
