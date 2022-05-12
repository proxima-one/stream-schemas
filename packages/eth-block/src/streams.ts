import { Block, BlockHeader } from "../src/gen/ts/proto/block";
import { EventStreamSchema } from "@proximaone/stream-schema-base";

export type EthBlock = Block;

export class BlockProtoSerializer {
  serialize(val: Block): Buffer {
    return Buffer.from(Block.encode(val).finish());
  }

  deserialize(buf: Buffer): Block {
    return Block.decode(buf);
  }
}

export class BlockHeaderProtoSerializer {
  serialize(val: BlockHeader): Buffer {
    return Buffer.from(BlockHeader.encode(val).finish());
  }

  deserialize(buf: Buffer): BlockHeader {
    return BlockHeader.decode(buf);
  }
}

export const block: EventStreamSchema<EthBlock> = {
  name: "eth-block-events.streams.proxima.one",
  serdes: new BlockProtoSerializer(),
  version: "0.1.1",
};
