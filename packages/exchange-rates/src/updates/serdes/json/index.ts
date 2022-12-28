import { Serdes, Timestamp } from "@proximaone/stream-schema-base";
import { Event, ExchangeRatesUpdate } from "../../model";

interface RatesUpdateJson {
  date: number;
  base: string;
  rates: Record<string, number>;
}

type EventJson = RatesUpdateJson

const domainToJson = (ev: Event): EventJson => ({
  date: ev.timestamp.epochMs,
  base: ev.base,
  rates: ev.rates,
});

const fromJsonFunc = (json: unknown): Event => {
  const optimistic = json as RatesUpdateJson;

  return new ExchangeRatesUpdate(
    Timestamp.fromEpochMs(optimistic.date),
    optimistic.base,
    optimistic.rates,
  );
}

export const JsonSerializer: Serdes<Event> = {
  serialize: (val: Event) => Buffer.from(JSON.stringify({
    ...domainToJson(val)
  })),
  deserialize: (buffer: Buffer) => fromJsonFunc(JSON.parse(buffer.toString())),
};

