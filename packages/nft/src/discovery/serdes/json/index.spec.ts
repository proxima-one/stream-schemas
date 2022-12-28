import { Address } from "@proximaone/stream-schema-eth-base";
import { JsonSerializer } from "./index";
import { NftCollection } from "../../model";

describe("discovery json serializer", () => {
  it("should serialize/deserialize to the same object", () => {
    const probes = [
      new NftCollection(
        Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
        "CPUNK",
        "CryptoPunks"
      ),
      new NftCollection(
        Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
        "GBG",
        "Garbage Collection"
      ),
    ];

    for (const probe of probes) {
      const deserialized = JsonSerializer.deserialize(JsonSerializer.serialize(probe));

      expect(deserialized).toEqual(probe);
    }
  });
});
