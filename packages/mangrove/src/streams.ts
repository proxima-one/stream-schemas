import { MangroveEvent } from "./events";
import { EventStreamSchema, serializers } from "@proximaone/stream-schema-base";
import { MultiUserStrategyEvent, TakerStrategyEvent } from "./strategyEvents";

export const mangrove: EventStreamSchema<MangroveEvent> = {
  name: "mangrove.streams.proxima.one",
  serdes: serializers.json<MangroveEvent>(),
  version: "0.2.0",
}

export const multiUserStrategies: EventStreamSchema<MultiUserStrategyEvent> = {
  name: "multi-user-strategies.streams.proxima.one",
  serdes: serializers.json<MultiUserStrategyEvent>(),
  version: "0.1.0",
}

export const takerStrategies: EventStreamSchema<TakerStrategyEvent> = {
  name: "taker-strategies.streams.proxima.one",
  serdes: serializers.json<TakerStrategyEvent>(),
  version: "0.1.0",
}
