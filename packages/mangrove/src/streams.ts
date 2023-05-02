import { MangroveEvent } from "./events";
import { serializers } from "@proximaone/stream-schema-base";
import { StrategyEvent } from "./strategyEvents";
import { KandelEvent, SeederEvent } from "./kandel";

export const mangrove = {
  serdes: serializers.json<MangroveEvent>()
}

export const strategies = {
  serdes: serializers.json<StrategyEvent>(),
}

export const kandel = {
  serdes: serializers.json<KandelEvent|SeederEvent>(),
}
