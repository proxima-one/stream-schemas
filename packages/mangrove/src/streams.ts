import * as eth from "./eth";
import * as core from "./core";
import { MangroveEvent } from "./events";
import { EventStreamSchema, serializers } from "@proxima-one/stream-schema-base";

export type MangroveStreamEvent = MangroveEvent & {
  tx?: eth.TransactionRef;
  mangroveId?: core.MangroveId;
};

export const mangrove: EventStreamSchema<MangroveStreamEvent> = {
  name: "mangrove.streams.proxima.one",
  serdes: serializers.json<MangroveStreamEvent>(),
  version: "0.1.0",
}
