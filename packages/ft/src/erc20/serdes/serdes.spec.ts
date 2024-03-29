import { Approval, Transfer } from "../model";
import { Address, BlockchainRef, Hash } from "@proximaone/stream-schema-eth-base";
import { JsonSerializer } from "./json";
import { ProtobufSerializer } from "./proto";
import BN from "bn.js";

const probes = [
  new Transfer(
    Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
    Address.fromHexString("0xf39673143c203f85fcc918fa10b49dab449cc31e"),
    Address.fromHexString("0xd5ed737bb13e4d41e2b060d94ab26e1c64801edb"),
    new BN(123123),
    new BlockchainRef(
      16155407,
      Hash.fromHexString("0x3b084c07275cb1f6082335109975d8cf77bd11e758931d5647d3a0d1a0368f44"),
      Hash.fromHexString("0x795f4085ffa3b9460426ee9a193d01e7c2e28918fe140be8eff04827aca1b9d6")
    ),
  ),
  new Approval(
    Address.fromHexString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
    Address.fromHexString("0xf39673143c203f85fcc918fa10b49dab449cc31e"),
    Address.fromHexString("0xd5ed737bb13e4d41e2b060d94ab26e1c64801edb"),
    new BN(987987),
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

describe("erc20 serializers", () => {
  for (const serializer of serializers) {
    describe(serializer.name, () => {
      it("should serialize/deserialize model", () => {
        for (const probe of probes) {
          const deserialized = serializer.sut.deserialize(serializer.sut.serialize(probe));

          expect(normalize(deserialized)).toEqual(normalize(probe));
        }
      });
    });
  }
});

function normalize(e: Transfer | Approval): any {
  if (e instanceof Transfer) {
    return {
      token: e.token.toHexString(),
      from: e.from.toHexString(),
      to: e.to.toHexString(),
      value: e.value.toString(10),
      block: e.ref.blockNumber,
      blockHash: e.ref.blockHash?.toHexString(),
      txHash: e.ref.txHash?.toHexString(),
    }
  }

  if (e instanceof Approval) {
    return {
      token: e.token.toHexString(),
      owner: e.owner.toHexString(),
      spender: e.spender.toHexString(),
      value: e.value.toString(10),
      block: e.ref.blockNumber,
      blockHash: e.ref.blockHash?.toHexString(),
      txHash: e.ref.txHash?.toHexString(),
    }
  }
}
