/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "";

export interface Block {
  header: BlockHeader | undefined;
  transactions: Transaction[];
  logs: Log[];
  receipts: Receipt[];
}

export interface BlockHeader {
  parentHash: Uint8Array;
  uncleHash: Uint8Array;
  miner: Uint8Array;
  stateRoot: Uint8Array;
  transactionsRoot: Uint8Array;
  receiptRoot: Uint8Array;
  logsBloom: Uint8Array;
  difficulty: BigInt | undefined;
  number: number;
  gasLimit: number;
  gasUsed: number;
  timestamp: Date | undefined;
  extraData: Uint8Array;
  mixHash: Uint8Array;
  nonce: Uint8Array;
  hash: Uint8Array;
  baseFeePerGas: Uint8Array;
  rlp: Uint8Array;
}

export interface Transaction {
  to: Uint8Array;
  nonce: number;
  gasPrice: BigInt | undefined;
  gasLimit: number;
  value: BigInt | undefined;
  input: Uint8Array;
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
  hash: Uint8Array;
  from: Uint8Array;
  blockNumber: number;
  blockHash: Uint8Array;
  rlp?: Uint8Array | undefined;
  merkleProof?: Proof | undefined;
}

export interface Proof {
  proof: Uint8Array;
}

export interface BigInt {
  value: Uint8Array;
}

export interface Log {
  address: Uint8Array;
  topics: Uint8Array[];
  data: Uint8Array;
  index: number;
  blockIndex: number;
  blockHash: Uint8Array;
  transactionIndex: number;
  transactionHash: Uint8Array;
  rlp?: Uint8Array | undefined;
}

export interface Receipt {
  to: Uint8Array;
  from: Uint8Array;
  transactionIndex: number;
  status: boolean;
  contractAddress: Uint8Array;
  gasUsed: number;
  cumulativeGasUsed: number;
  logsBloom: Uint8Array;
  logs: Log[];
  rlp?: Uint8Array | undefined;
  merkleProof?: Proof | undefined;
}

function createBaseBlock(): Block {
  return { header: undefined, transactions: [], logs: [], receipts: [] };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BlockHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BlockHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(Receipt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      header: isSet(object.header)
        ? BlockHeader.fromJSON(object.header)
        : undefined,
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      logs: Array.isArray(object?.logs)
        ? object.logs.map((e: any) => Log.fromJSON(e))
        : [],
      receipts: Array.isArray(object?.receipts)
        ? object.receipts.map((e: any) => Receipt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header
        ? BlockHeader.toJSON(message.header)
        : undefined);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) =>
        e ? Receipt.toJSON(e) : undefined
      );
    } else {
      obj.receipts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.header =
      object.header !== undefined && object.header !== null
        ? BlockHeader.fromPartial(object.header)
        : undefined;
    message.transactions =
      object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
    message.receipts =
      object.receipts?.map((e) => Receipt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlockHeader(): BlockHeader {
  return {
    parentHash: new Uint8Array(),
    uncleHash: new Uint8Array(),
    miner: new Uint8Array(),
    stateRoot: new Uint8Array(),
    transactionsRoot: new Uint8Array(),
    receiptRoot: new Uint8Array(),
    logsBloom: new Uint8Array(),
    difficulty: undefined,
    number: 0,
    gasLimit: 0,
    gasUsed: 0,
    timestamp: undefined,
    extraData: new Uint8Array(),
    mixHash: new Uint8Array(),
    nonce: new Uint8Array(),
    hash: new Uint8Array(),
    baseFeePerGas: new Uint8Array(),
    rlp: new Uint8Array(),
  };
}

export const BlockHeader = {
  encode(
    message: BlockHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parentHash.length !== 0) {
      writer.uint32(10).bytes(message.parentHash);
    }
    if (message.uncleHash.length !== 0) {
      writer.uint32(18).bytes(message.uncleHash);
    }
    if (message.miner.length !== 0) {
      writer.uint32(26).bytes(message.miner);
    }
    if (message.stateRoot.length !== 0) {
      writer.uint32(34).bytes(message.stateRoot);
    }
    if (message.transactionsRoot.length !== 0) {
      writer.uint32(42).bytes(message.transactionsRoot);
    }
    if (message.receiptRoot.length !== 0) {
      writer.uint32(50).bytes(message.receiptRoot);
    }
    if (message.logsBloom.length !== 0) {
      writer.uint32(58).bytes(message.logsBloom);
    }
    if (message.difficulty !== undefined) {
      BigInt.encode(message.difficulty, writer.uint32(66).fork()).ldelim();
    }
    if (message.number !== 0) {
      writer.uint32(72).uint64(message.number);
    }
    if (message.gasLimit !== 0) {
      writer.uint32(80).uint64(message.gasLimit);
    }
    if (message.gasUsed !== 0) {
      writer.uint32(88).uint64(message.gasUsed);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.extraData.length !== 0) {
      writer.uint32(106).bytes(message.extraData);
    }
    if (message.mixHash.length !== 0) {
      writer.uint32(114).bytes(message.mixHash);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(122).bytes(message.nonce);
    }
    if (message.hash.length !== 0) {
      writer.uint32(130).bytes(message.hash);
    }
    if (message.baseFeePerGas.length !== 0) {
      writer.uint32(138).bytes(message.baseFeePerGas);
    }
    if (message.rlp.length !== 0) {
      writer.uint32(146).bytes(message.rlp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentHash = reader.bytes();
          break;
        case 2:
          message.uncleHash = reader.bytes();
          break;
        case 3:
          message.miner = reader.bytes();
          break;
        case 4:
          message.stateRoot = reader.bytes();
          break;
        case 5:
          message.transactionsRoot = reader.bytes();
          break;
        case 6:
          message.receiptRoot = reader.bytes();
          break;
        case 7:
          message.logsBloom = reader.bytes();
          break;
        case 8:
          message.difficulty = BigInt.decode(reader, reader.uint32());
          break;
        case 9:
          message.number = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.gasLimit = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.gasUsed = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.extraData = reader.bytes();
          break;
        case 14:
          message.mixHash = reader.bytes();
          break;
        case 15:
          message.nonce = reader.bytes();
          break;
        case 16:
          message.hash = reader.bytes();
          break;
        case 17:
          message.baseFeePerGas = reader.bytes();
          break;
        case 18:
          message.rlp = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockHeader {
    return {
      parentHash: isSet(object.parentHash)
        ? bytesFromBase64(object.parentHash)
        : new Uint8Array(),
      uncleHash: isSet(object.uncleHash)
        ? bytesFromBase64(object.uncleHash)
        : new Uint8Array(),
      miner: isSet(object.miner)
        ? bytesFromBase64(object.miner)
        : new Uint8Array(),
      stateRoot: isSet(object.stateRoot)
        ? bytesFromBase64(object.stateRoot)
        : new Uint8Array(),
      transactionsRoot: isSet(object.transactionsRoot)
        ? bytesFromBase64(object.transactionsRoot)
        : new Uint8Array(),
      receiptRoot: isSet(object.receiptRoot)
        ? bytesFromBase64(object.receiptRoot)
        : new Uint8Array(),
      logsBloom: isSet(object.logsBloom)
        ? bytesFromBase64(object.logsBloom)
        : new Uint8Array(),
      difficulty: isSet(object.difficulty)
        ? BigInt.fromJSON(object.difficulty)
        : undefined,
      number: isSet(object.number) ? Number(object.number) : 0,
      gasLimit: isSet(object.gasLimit) ? Number(object.gasLimit) : 0,
      gasUsed: isSet(object.gasUsed) ? Number(object.gasUsed) : 0,
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      extraData: isSet(object.extraData)
        ? bytesFromBase64(object.extraData)
        : new Uint8Array(),
      mixHash: isSet(object.mixHash)
        ? bytesFromBase64(object.mixHash)
        : new Uint8Array(),
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      baseFeePerGas: isSet(object.baseFeePerGas)
        ? bytesFromBase64(object.baseFeePerGas)
        : new Uint8Array(),
      rlp: isSet(object.rlp) ? bytesFromBase64(object.rlp) : new Uint8Array(),
    };
  },

  toJSON(message: BlockHeader): unknown {
    const obj: any = {};
    message.parentHash !== undefined &&
      (obj.parentHash = base64FromBytes(
        message.parentHash !== undefined ? message.parentHash : new Uint8Array()
      ));
    message.uncleHash !== undefined &&
      (obj.uncleHash = base64FromBytes(
        message.uncleHash !== undefined ? message.uncleHash : new Uint8Array()
      ));
    message.miner !== undefined &&
      (obj.miner = base64FromBytes(
        message.miner !== undefined ? message.miner : new Uint8Array()
      ));
    message.stateRoot !== undefined &&
      (obj.stateRoot = base64FromBytes(
        message.stateRoot !== undefined ? message.stateRoot : new Uint8Array()
      ));
    message.transactionsRoot !== undefined &&
      (obj.transactionsRoot = base64FromBytes(
        message.transactionsRoot !== undefined
          ? message.transactionsRoot
          : new Uint8Array()
      ));
    message.receiptRoot !== undefined &&
      (obj.receiptRoot = base64FromBytes(
        message.receiptRoot !== undefined
          ? message.receiptRoot
          : new Uint8Array()
      ));
    message.logsBloom !== undefined &&
      (obj.logsBloom = base64FromBytes(
        message.logsBloom !== undefined ? message.logsBloom : new Uint8Array()
      ));
    message.difficulty !== undefined &&
      (obj.difficulty = message.difficulty
        ? BigInt.toJSON(message.difficulty)
        : undefined);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.gasLimit !== undefined &&
      (obj.gasLimit = Math.round(message.gasLimit));
    message.gasUsed !== undefined &&
      (obj.gasUsed = Math.round(message.gasUsed));
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.extraData !== undefined &&
      (obj.extraData = base64FromBytes(
        message.extraData !== undefined ? message.extraData : new Uint8Array()
      ));
    message.mixHash !== undefined &&
      (obj.mixHash = base64FromBytes(
        message.mixHash !== undefined ? message.mixHash : new Uint8Array()
      ));
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.baseFeePerGas !== undefined &&
      (obj.baseFeePerGas = base64FromBytes(
        message.baseFeePerGas !== undefined
          ? message.baseFeePerGas
          : new Uint8Array()
      ));
    message.rlp !== undefined &&
      (obj.rlp = base64FromBytes(
        message.rlp !== undefined ? message.rlp : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockHeader>, I>>(
    object: I
  ): BlockHeader {
    const message = createBaseBlockHeader();
    message.parentHash = object.parentHash ?? new Uint8Array();
    message.uncleHash = object.uncleHash ?? new Uint8Array();
    message.miner = object.miner ?? new Uint8Array();
    message.stateRoot = object.stateRoot ?? new Uint8Array();
    message.transactionsRoot = object.transactionsRoot ?? new Uint8Array();
    message.receiptRoot = object.receiptRoot ?? new Uint8Array();
    message.logsBloom = object.logsBloom ?? new Uint8Array();
    message.difficulty =
      object.difficulty !== undefined && object.difficulty !== null
        ? BigInt.fromPartial(object.difficulty)
        : undefined;
    message.number = object.number ?? 0;
    message.gasLimit = object.gasLimit ?? 0;
    message.gasUsed = object.gasUsed ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.extraData = object.extraData ?? new Uint8Array();
    message.mixHash = object.mixHash ?? new Uint8Array();
    message.nonce = object.nonce ?? new Uint8Array();
    message.hash = object.hash ?? new Uint8Array();
    message.baseFeePerGas = object.baseFeePerGas ?? new Uint8Array();
    message.rlp = object.rlp ?? new Uint8Array();
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    to: new Uint8Array(),
    nonce: 0,
    gasPrice: undefined,
    gasLimit: 0,
    value: undefined,
    input: new Uint8Array(),
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array(),
    hash: new Uint8Array(),
    from: new Uint8Array(),
    blockNumber: 0,
    blockHash: new Uint8Array(),
    rlp: undefined,
    merkleProof: undefined,
  };
}

export const Transaction = {
  encode(
    message: Transaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasPrice !== undefined) {
      BigInt.encode(message.gasPrice, writer.uint32(26).fork()).ldelim();
    }
    if (message.gasLimit !== 0) {
      writer.uint32(32).uint64(message.gasLimit);
    }
    if (message.value !== undefined) {
      BigInt.encode(message.value, writer.uint32(42).fork()).ldelim();
    }
    if (message.input.length !== 0) {
      writer.uint32(50).bytes(message.input);
    }
    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }
    if (message.hash.length !== 0) {
      writer.uint32(82).bytes(message.hash);
    }
    if (message.from.length !== 0) {
      writer.uint32(90).bytes(message.from);
    }
    if (message.blockNumber !== 0) {
      writer.uint32(96).uint64(message.blockNumber);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(106).bytes(message.blockHash);
    }
    if (message.rlp !== undefined) {
      writer.uint32(114).bytes(message.rlp);
    }
    if (message.merkleProof !== undefined) {
      Proof.encode(message.merkleProof, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.bytes();
          break;
        case 2:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.gasPrice = BigInt.decode(reader, reader.uint32());
          break;
        case 4:
          message.gasLimit = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.value = BigInt.decode(reader, reader.uint32());
          break;
        case 6:
          message.input = reader.bytes();
          break;
        case 7:
          message.v = reader.bytes();
          break;
        case 8:
          message.r = reader.bytes();
          break;
        case 9:
          message.s = reader.bytes();
          break;
        case 10:
          message.hash = reader.bytes();
          break;
        case 11:
          message.from = reader.bytes();
          break;
        case 12:
          message.blockNumber = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.blockHash = reader.bytes();
          break;
        case 14:
          message.rlp = reader.bytes();
          break;
        case 15:
          message.merkleProof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      gasPrice: isSet(object.gasPrice)
        ? BigInt.fromJSON(object.gasPrice)
        : undefined,
      gasLimit: isSet(object.gasLimit) ? Number(object.gasLimit) : 0,
      value: isSet(object.value) ? BigInt.fromJSON(object.value) : undefined,
      input: isSet(object.input)
        ? bytesFromBase64(object.input)
        : new Uint8Array(),
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array(),
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      from: isSet(object.from)
        ? bytesFromBase64(object.from)
        : new Uint8Array(),
      blockNumber: isSet(object.blockNumber) ? Number(object.blockNumber) : 0,
      blockHash: isSet(object.blockHash)
        ? bytesFromBase64(object.blockHash)
        : new Uint8Array(),
      rlp: isSet(object.rlp) ? bytesFromBase64(object.rlp) : undefined,
      merkleProof: isSet(object.merkleProof)
        ? Proof.fromJSON(object.merkleProof)
        : undefined,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.to !== undefined &&
      (obj.to = base64FromBytes(
        message.to !== undefined ? message.to : new Uint8Array()
      ));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.gasPrice !== undefined &&
      (obj.gasPrice = message.gasPrice
        ? BigInt.toJSON(message.gasPrice)
        : undefined);
    message.gasLimit !== undefined &&
      (obj.gasLimit = Math.round(message.gasLimit));
    message.value !== undefined &&
      (obj.value = message.value ? BigInt.toJSON(message.value) : undefined);
    message.input !== undefined &&
      (obj.input = base64FromBytes(
        message.input !== undefined ? message.input : new Uint8Array()
      ));
    message.v !== undefined &&
      (obj.v = base64FromBytes(
        message.v !== undefined ? message.v : new Uint8Array()
      ));
    message.r !== undefined &&
      (obj.r = base64FromBytes(
        message.r !== undefined ? message.r : new Uint8Array()
      ));
    message.s !== undefined &&
      (obj.s = base64FromBytes(
        message.s !== undefined ? message.s : new Uint8Array()
      ));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.from !== undefined &&
      (obj.from = base64FromBytes(
        message.from !== undefined ? message.from : new Uint8Array()
      ));
    message.blockNumber !== undefined &&
      (obj.blockNumber = Math.round(message.blockNumber));
    message.blockHash !== undefined &&
      (obj.blockHash = base64FromBytes(
        message.blockHash !== undefined ? message.blockHash : new Uint8Array()
      ));
    message.rlp !== undefined &&
      (obj.rlp =
        message.rlp !== undefined ? base64FromBytes(message.rlp) : undefined);
    message.merkleProof !== undefined &&
      (obj.merkleProof = message.merkleProof
        ? Proof.toJSON(message.merkleProof)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(
    object: I
  ): Transaction {
    const message = createBaseTransaction();
    message.to = object.to ?? new Uint8Array();
    message.nonce = object.nonce ?? 0;
    message.gasPrice =
      object.gasPrice !== undefined && object.gasPrice !== null
        ? BigInt.fromPartial(object.gasPrice)
        : undefined;
    message.gasLimit = object.gasLimit ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? BigInt.fromPartial(object.value)
        : undefined;
    message.input = object.input ?? new Uint8Array();
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    message.hash = object.hash ?? new Uint8Array();
    message.from = object.from ?? new Uint8Array();
    message.blockNumber = object.blockNumber ?? 0;
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.rlp = object.rlp ?? undefined;
    message.merkleProof =
      object.merkleProof !== undefined && object.merkleProof !== null
        ? Proof.fromPartial(object.merkleProof)
        : undefined;
    return message;
  },
};

function createBaseProof(): Proof {
  return { proof: new Uint8Array() };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proof.length !== 0) {
      writer.uint32(10).bytes(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    return {
      proof: isSet(object.proof)
        ? bytesFromBase64(object.proof)
        : new Uint8Array(),
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.proof = object.proof ?? new Uint8Array();
    return message;
  },
};

function createBaseBigInt(): BigInt {
  return { value: new Uint8Array() };
}

export const BigInt = {
  encode(
    message: BigInt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BigInt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BigInt {
    return {
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: BigInt): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BigInt>, I>>(object: I): BigInt {
    const message = createBaseBigInt();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseLog(): Log {
  return {
    address: new Uint8Array(),
    topics: [],
    data: new Uint8Array(),
    index: 0,
    blockIndex: 0,
    blockHash: new Uint8Array(),
    transactionIndex: 0,
    transactionHash: new Uint8Array(),
    rlp: undefined,
  };
}

export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).bytes(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.index !== 0) {
      writer.uint32(32).uint32(message.index);
    }
    if (message.blockIndex !== 0) {
      writer.uint32(40).uint32(message.blockIndex);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(50).bytes(message.blockHash);
    }
    if (message.transactionIndex !== 0) {
      writer.uint32(56).uint32(message.transactionIndex);
    }
    if (message.transactionHash.length !== 0) {
      writer.uint32(66).bytes(message.transactionHash);
    }
    if (message.rlp !== undefined) {
      writer.uint32(74).bytes(message.rlp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.topics.push(reader.bytes());
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.index = reader.uint32();
          break;
        case 5:
          message.blockIndex = reader.uint32();
          break;
        case 6:
          message.blockHash = reader.bytes();
          break;
        case 7:
          message.transactionIndex = reader.uint32();
          break;
        case 8:
          message.transactionHash = reader.bytes();
          break;
        case 9:
          message.rlp = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Log {
    return {
      address: isSet(object.address)
        ? bytesFromBase64(object.address)
        : new Uint8Array(),
      topics: Array.isArray(object?.topics)
        ? object.topics.map((e: any) => bytesFromBase64(e))
        : [],
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      index: isSet(object.index) ? Number(object.index) : 0,
      blockIndex: isSet(object.blockIndex) ? Number(object.blockIndex) : 0,
      blockHash: isSet(object.blockHash)
        ? bytesFromBase64(object.blockHash)
        : new Uint8Array(),
      transactionIndex: isSet(object.transactionIndex)
        ? Number(object.transactionIndex)
        : 0,
      transactionHash: isSet(object.transactionHash)
        ? bytesFromBase64(object.transactionHash)
        : new Uint8Array(),
      rlp: isSet(object.rlp) ? bytesFromBase64(object.rlp) : undefined,
    };
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    if (message.topics) {
      obj.topics = message.topics.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.topics = [];
    }
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.blockIndex !== undefined &&
      (obj.blockIndex = Math.round(message.blockIndex));
    message.blockHash !== undefined &&
      (obj.blockHash = base64FromBytes(
        message.blockHash !== undefined ? message.blockHash : new Uint8Array()
      ));
    message.transactionIndex !== undefined &&
      (obj.transactionIndex = Math.round(message.transactionIndex));
    message.transactionHash !== undefined &&
      (obj.transactionHash = base64FromBytes(
        message.transactionHash !== undefined
          ? message.transactionHash
          : new Uint8Array()
      ));
    message.rlp !== undefined &&
      (obj.rlp =
        message.rlp !== undefined ? base64FromBytes(message.rlp) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Log>, I>>(object: I): Log {
    const message = createBaseLog();
    message.address = object.address ?? new Uint8Array();
    message.topics = object.topics?.map((e) => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.index = object.index ?? 0;
    message.blockIndex = object.blockIndex ?? 0;
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.transactionIndex = object.transactionIndex ?? 0;
    message.transactionHash = object.transactionHash ?? new Uint8Array();
    message.rlp = object.rlp ?? undefined;
    return message;
  },
};

function createBaseReceipt(): Receipt {
  return {
    to: new Uint8Array(),
    from: new Uint8Array(),
    transactionIndex: 0,
    status: false,
    contractAddress: new Uint8Array(),
    gasUsed: 0,
    cumulativeGasUsed: 0,
    logsBloom: new Uint8Array(),
    logs: [],
    rlp: undefined,
    merkleProof: undefined,
  };
}

export const Receipt = {
  encode(
    message: Receipt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    if (message.from.length !== 0) {
      writer.uint32(18).bytes(message.from);
    }
    if (message.transactionIndex !== 0) {
      writer.uint32(24).uint32(message.transactionIndex);
    }
    if (message.status === true) {
      writer.uint32(32).bool(message.status);
    }
    if (message.contractAddress.length !== 0) {
      writer.uint32(42).bytes(message.contractAddress);
    }
    if (message.gasUsed !== 0) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    if (message.cumulativeGasUsed !== 0) {
      writer.uint32(56).uint64(message.cumulativeGasUsed);
    }
    if (message.logsBloom.length !== 0) {
      writer.uint32(66).bytes(message.logsBloom);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.rlp !== undefined) {
      writer.uint32(82).bytes(message.rlp);
    }
    if (message.merkleProof !== undefined) {
      Proof.encode(message.merkleProof, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.bytes();
          break;
        case 2:
          message.from = reader.bytes();
          break;
        case 3:
          message.transactionIndex = reader.uint32();
          break;
        case 4:
          message.status = reader.bool();
          break;
        case 5:
          message.contractAddress = reader.bytes();
          break;
        case 6:
          message.gasUsed = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.cumulativeGasUsed = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.logsBloom = reader.bytes();
          break;
        case 9:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 10:
          message.rlp = reader.bytes();
          break;
        case 11:
          message.merkleProof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receipt {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      from: isSet(object.from)
        ? bytesFromBase64(object.from)
        : new Uint8Array(),
      transactionIndex: isSet(object.transactionIndex)
        ? Number(object.transactionIndex)
        : 0,
      status: isSet(object.status) ? Boolean(object.status) : false,
      contractAddress: isSet(object.contractAddress)
        ? bytesFromBase64(object.contractAddress)
        : new Uint8Array(),
      gasUsed: isSet(object.gasUsed) ? Number(object.gasUsed) : 0,
      cumulativeGasUsed: isSet(object.cumulativeGasUsed)
        ? Number(object.cumulativeGasUsed)
        : 0,
      logsBloom: isSet(object.logsBloom)
        ? bytesFromBase64(object.logsBloom)
        : new Uint8Array(),
      logs: Array.isArray(object?.logs)
        ? object.logs.map((e: any) => Log.fromJSON(e))
        : [],
      rlp: isSet(object.rlp) ? bytesFromBase64(object.rlp) : undefined,
      merkleProof: isSet(object.merkleProof)
        ? Proof.fromJSON(object.merkleProof)
        : undefined,
    };
  },

  toJSON(message: Receipt): unknown {
    const obj: any = {};
    message.to !== undefined &&
      (obj.to = base64FromBytes(
        message.to !== undefined ? message.to : new Uint8Array()
      ));
    message.from !== undefined &&
      (obj.from = base64FromBytes(
        message.from !== undefined ? message.from : new Uint8Array()
      ));
    message.transactionIndex !== undefined &&
      (obj.transactionIndex = Math.round(message.transactionIndex));
    message.status !== undefined && (obj.status = message.status);
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined
          ? message.contractAddress
          : new Uint8Array()
      ));
    message.gasUsed !== undefined &&
      (obj.gasUsed = Math.round(message.gasUsed));
    message.cumulativeGasUsed !== undefined &&
      (obj.cumulativeGasUsed = Math.round(message.cumulativeGasUsed));
    message.logsBloom !== undefined &&
      (obj.logsBloom = base64FromBytes(
        message.logsBloom !== undefined ? message.logsBloom : new Uint8Array()
      ));
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    message.rlp !== undefined &&
      (obj.rlp =
        message.rlp !== undefined ? base64FromBytes(message.rlp) : undefined);
    message.merkleProof !== undefined &&
      (obj.merkleProof = message.merkleProof
        ? Proof.toJSON(message.merkleProof)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Receipt>, I>>(object: I): Receipt {
    const message = createBaseReceipt();
    message.to = object.to ?? new Uint8Array();
    message.from = object.from ?? new Uint8Array();
    message.transactionIndex = object.transactionIndex ?? 0;
    message.status = object.status ?? false;
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.gasUsed = object.gasUsed ?? 0;
    message.cumulativeGasUsed = object.cumulativeGasUsed ?? 0;
    message.logsBloom = object.logsBloom ?? new Uint8Array();
    message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
    message.rlp = object.rlp ?? undefined;
    message.merkleProof =
      object.merkleProof !== undefined && object.merkleProof !== null
        ? Proof.fromPartial(object.merkleProof)
        : undefined;
    return message;
  },
};

export interface EthereumTransactions {}

export class EthereumTransactionsClientImpl implements EthereumTransactions {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
