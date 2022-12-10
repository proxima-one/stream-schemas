import { Timestamp } from "@proximaone/stream-schema-base";

export type Event = ExchangeRatesUpdate;

export class ExchangeRatesUpdate {
  type = "update" as const;

  public constructor(
    public readonly timestamp: Timestamp,
    public readonly base: string,
    public readonly rates: Readonly<Record<string, number>>) {
  }
}
