import { MangroveEvent } from "./events";
import { serializers } from "@proximaone/stream-schema-base";
import { StrategyEvent } from "./strategyEvents";
import { KandelEvent } from "./kandel";
import { MgvOracleEvent } from "./mgvOracle";

export const mangrove = {
  serdes: serializers.json<MangroveEvent>()
}

export const strategies = {
  serdes: serializers.json<StrategyEvent>(),
}

export const kandel = {
  serdes: serializers.json<KandelEvent>(),
}

export const mgvOracle = {
  serdes: serializers.json<MgvOracleEvent>(),
}
