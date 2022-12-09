import { MangroveEvent } from "./events";
import { EventStreamSchema, serializers } from "@proximaone/stream-schema-base";
import { StrategyEvent } from "./strategyEvents";

export const mangrove: EventStreamSchema<MangroveEvent> = {
  name: "mangrove.streams.proxima.one",
  serdes: serializers.json<MangroveEvent>(),
  version: "0.2.0",
}

export const strategies: EventStreamSchema<StrategyEvent> = {
  name: "strategies",
  serdes: serializers.json<StrategyEvent>(),
  version: "0.1.0",
}
