import { Address } from "@proximaone/stream-schema-eth-base";
import { JsonSerializer } from "./index";
import { Token } from "../../model";
import BN from "bn.js";

describe("discovery json serializer", () => {
  it("should serialize/deserialize to the same object", () => {
    const probes = [
      new Token(
        Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
        "USDC",
        "USD Coin",
        new BN("123123123123123123123123123123123"),
        6
      ),
      new Token(
        Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
        "USDC",
        "USD Coin",
        new BN(123123123123)
      ),
    ];

    for (const probe of probes) {
      const deserialized = JsonSerializer.deserialize(JsonSerializer.serialize(probe));

      expect(deserialized).toEqual(probe);
    }
  });
});
