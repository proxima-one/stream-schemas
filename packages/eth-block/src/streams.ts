import {
  Block,
  BlockRLP,
  BlockMerkleProof,
  BlockHeader,
} from "./gen/ts/proto/block";
import { EventStreamSchema } from "@proximaone/stream-schema-base";

export type EthBlock = Block;
export type EthBlockRLP = BlockRLP;
export type EthBlockMerkleProof = BlockMerkleProof;

export class BlockProtoSerializer {
  serialize(val: Block): Buffer {
    return Buffer.from(Block.encode(val).finish());
  }

  deserialize(buf: Buffer): Block {
    return Block.decode(buf);
  }
}

export class BlockRLPProtoSerializer {
  serialize(val: BlockRLP): Buffer {
    return Buffer.from(BlockRLP.encode(val).finish());
  }
  deserialize(buf: Buffer): BlockRLP {
    return BlockRLP.decode(buf);
  }
}

export class BlockMerkleProofProtoSerializer {
  serialize(val: BlockMerkleProof): Buffer {
    return Buffer.from(BlockMerkleProof.encode(val).finish());
  }
  deserialize(buf: Buffer): BlockMerkleProof {
    return BlockMerkleProof.decode(buf);
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
  name: "eth-full-block.streams.proxima.one",
  serdes: new BlockProtoSerializer(),
  version: "0.1.1",
};

export const blockrlp: EventStreamSchema<EthBlockRLP> = {
  name: "eth-block-rlp.streams.proxima.one",
  serdes: new BlockRLPProtoSerializer(),
  version: "0.1.1",
};

export const blockMerkleProof: EventStreamSchema<EthBlockMerkleProof> = {
  name: "eth-block-merkle-proof.streams.proxima.one",
  serdes: new BlockMerkleProofProtoSerializer(),
  version: "0.1.1",
};
