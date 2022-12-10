import { JsonSerializer } from "./index";
import { ExchangeRatesUpdate } from "../../model";
import { Timestamp } from "@proximaone/stream-schema-base";

describe("exchange rates updates json serializer", () => {
  it("should serialize/deserialize to the same object", () => {
    const probes = [
      new ExchangeRatesUpdate(
        Timestamp.now(),
        "USD",
        {
          "EUR": 1.04,
          "CHF": 123.123123123
        }
      ),
    ];

    for (const probe of probes) {
      const deserialized = JsonSerializer.deserialize(JsonSerializer.serialize(probe));

      expect(deserialized).toEqual(probe);
    }
  });
});
