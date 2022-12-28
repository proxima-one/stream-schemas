import { MangroveEvent } from "./events";
import { serializers } from "@proximaone/stream-schema-base";
import { StrategyEvent } from "./strategyEvents";

export const mangrove = {
  serdes: serializers.json<MangroveEvent>()
}

export const strategies = {
  serdes: serializers.json<StrategyEvent>(),
}
