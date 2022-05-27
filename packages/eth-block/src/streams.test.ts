import { BlockHeader, BigInt } from "./gen/ts/proto/block";
import { Timestamp } from "./gen/ts/google/protobuf/timestamp";
import { BlockHeaderProtoSerializer } from "./streams";

describe("Test stream proto schema", () => {
  it("Should encode and decode blocks", () => {
    const blockObject = {
      hash: "0x5d15649e25d8f3e2c0374946078539d200710afc977cdfc6a977bd23f20fa8e8",
      parentHash:
        "0x1e77d8f1267348b516ebc4f4da1e2aa59f85f0cbd853949500ffac8bfc38ba14",
      sha3Uncles:
        "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      miner: "0x2a65Aca4D5fC5B5C859090a6c34d164135398226",
      stateRoot:
        "0x0b5e4386680f43c224c5c037efc0b645c8e1c3f6b30da0eec07272b4e6f8cd89",
      transactionsRoot:
        "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      receiptsRoot:
        "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      logsBloom:
        "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      difficulty: BigInt.fromJSON(6022643743806),
      number: 400000,
      gasLimit: 3141592,
      gasUsed: 0,
      timestamp: Timestamp.fromJSON("1445130204"),
      extraData: "0xd583010202844765746885676f312e35856c696e7578",
      mixHash:
        "0x3fbea7af642a4e20cd93a945a1f5e23bd72fc5261153e09102cf718980aeff38",
      nonce: "0x6af23caae95692ef",
    };

    const blockHeader = BlockHeader.fromJSON(blockObject);

    const encoded = BlockHeader.encode(blockHeader).finish();
    expect(encoded).toBeTruthy();
    const decodedBlockHeader = BlockHeader.decode(encoded);
    expect(decodedBlockHeader).toBeTruthy();

    expect(BlockHeader.encode(decodedBlockHeader).finish().toString()).toBe(
      encoded.toString()
    );

    const serializer = new BlockHeaderProtoSerializer();

    const ser_enc = serializer.serialize(blockHeader);
    expect(ser_enc).toBeTruthy();
    const header_decoded = serializer.deserialize(ser_enc);
    expect(header_decoded).toBeTruthy();

    expect(serializer.serialize(header_decoded).toString("hex")).toBe(
      ser_enc.toString("hex")
    );
  });
});
