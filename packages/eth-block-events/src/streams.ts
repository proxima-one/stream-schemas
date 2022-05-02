import {
  Block,
  BlockHeader,
  Transaction,
  Log,
  Receipt,
} from "../src/gen/ts/proto/block";
import {
  EventStreamSchema,
  serializers,
} from "@proxima-one/stream-schema-base";

export type EthBlockEvent = Block | BlockHeader | Log | Receipt | Transaction;



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

export const block: EventStreamSchema<EthBlockEvent> = {
  name: "eth-block-events.streams.proxima.one",
  serdes: new BlockProtoSerializer(),
  version: "0.1.1",
};
