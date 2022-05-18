import { MangroveEvent } from "./events";
import { EventStreamSchema, serializers } from "@proximaone/stream-schema-base";

export const mangrove: EventStreamSchema<MangroveEvent> = {
  name: "mangrove.streams.proxima.one",
  serdes: serializers.json<MangroveEvent>(),
  version: "0.2.0",
}
