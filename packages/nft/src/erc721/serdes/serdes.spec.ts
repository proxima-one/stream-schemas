import { Approval, ApprovalForAll, Transfer } from "../model";
import { Address, BlockchainRef, Hash } from "@proximaone/stream-schema-eth-base";
import { JsonSerializer } from "./json";
import { ProtobufSerializer } from "./proto";
import { Bytes } from "@proximaone/stream-schema-base";

Bytes.testMode();

const probes = [
  new Transfer(
    Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
    1234,
    Address.fromHexString("0xf39673143c203f85fcc918fa10b49dab449cc31e"),
    Address.fromHexString("0xd5ed737bb13e4d41e2b060d94ab26e1c64801edb"),
    new BlockchainRef(
      16155407,
      Hash.fromHexString("0x3b084c07275cb1f6082335109975d8cf77bd11e758931d5647d3a0d1a0368f44"),
      Hash.fromHexString("0x795f4085ffa3b9460426ee9a193d01e7c2e28918fe140be8eff04827aca1b9d6")
    ),
  ),
  new Approval(
    Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
    345334,
    Address.fromHexString("0xf39673143c203f85fcc918fa10b49dab449cc31e"),
    Address.fromHexString("0xd5ed737bb13e4d41e2b060d94ab26e1c64801edb"),
    new BlockchainRef(
      16155407,
      Hash.fromHexString("0x3b084c07275cb1f6082335109975d8cf77bd11e758931d5647d3a0d1a0368f44"),
      Hash.fromHexString("0x795f4085ffa3b9460426ee9a193d01e7c2e28918fe140be8eff04827aca1b9d6")
    ),
  ),
  new ApprovalForAll(
    Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
    Address.fromHexString("0xf39673143c203f85fcc918fa10b49dab449cc31e"),
    Address.fromHexString("0xd5ed737bb13e4d41e2b060d94ab26e1c64801edb"),
    new BlockchainRef(
      16155407,
      Hash.fromHexString("0x3b084c07275cb1f6082335109975d8cf77bd11e758931d5647d3a0d1a0368f44"),
      Hash.fromHexString("0x795f4085ffa3b9460426ee9a193d01e7c2e28918fe140be8eff04827aca1b9d6")
    ),
  )
];

const serializers = [
  {name: "json", sut: JsonSerializer},
  {name: "proto", sut: ProtobufSerializer},
];

describe("erc721 serializers", () => {
  for (const serializer of serializers) {
    describe(serializer.name, () => {
      it("should serialize/deserialize model", () => {
        for (const probe of probes) {
          const deserialized = serializer.sut.deserialize(serializer.sut.serialize(probe));

          expect(deserialized).toEqual(probe);
        }
      });
    });
  }
});
