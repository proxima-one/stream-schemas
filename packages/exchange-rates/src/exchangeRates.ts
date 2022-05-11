import { Amount, JsonObject, EventStreamSchema, serializers } from "@proximaone/stream-schema-base";

export type Currency = string;

export interface ExchangeRatesStreamEvent extends JsonObject {
  date: string;  // YYYY-MM-DD
  base: Currency;
  rates: Record<Currency, Amount>;
};

export const exchangeRates: EventStreamSchema<ExchangeRatesStreamEvent> = {
  name: "exchange-rates.streams.proxima.one",
  serdes: serializers.json<ExchangeRatesStreamEvent>(),
  version: "0.1.0",
}
