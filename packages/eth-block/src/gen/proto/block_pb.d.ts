// package:
// file: proto/block.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Block extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): BlockHeader | undefined;
  setHeader(value?: BlockHeader): Block;
  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): Block;
  addTransactions(value?: Transaction, index?: number): Transaction;
  clearLogsList(): void;
  getLogsList(): Array<Log>;
  setLogsList(value: Array<Log>): Block;
  addLogs(value?: Log, index?: number): Log;
  clearReceiptsList(): void;
  getReceiptsList(): Array<Receipt>;
  setReceiptsList(value: Array<Receipt>): Block;
  addReceipts(value?: Receipt, index?: number): Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Block,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(
    message: Block,
    reader: jspb.BinaryReader
  ): Block;
}

export namespace Block {
  export type AsObject = {
    header?: BlockHeader.AsObject;
    transactionsList: Array<Transaction.AsObject>;
    logsList: Array<Log.AsObject>;
    receiptsList: Array<Receipt.AsObject>;
  };
}

export class BlockHeader extends jspb.Message {
  getParentHash(): Uint8Array | string;
  getParentHash_asU8(): Uint8Array;
  getParentHash_asB64(): string;
  setParentHash(value: Uint8Array | string): BlockHeader;
  getUncleHash(): Uint8Array | string;
  getUncleHash_asU8(): Uint8Array;
  getUncleHash_asB64(): string;
  setUncleHash(value: Uint8Array | string): BlockHeader;
  getMiner(): Uint8Array | string;
  getMiner_asU8(): Uint8Array;
  getMiner_asB64(): string;
  setMiner(value: Uint8Array | string): BlockHeader;
  getStateRoot(): Uint8Array | string;
  getStateRoot_asU8(): Uint8Array;
  getStateRoot_asB64(): string;
  setStateRoot(value: Uint8Array | string): BlockHeader;
  getTransactionsRoot(): Uint8Array | string;
  getTransactionsRoot_asU8(): Uint8Array;
  getTransactionsRoot_asB64(): string;
  setTransactionsRoot(value: Uint8Array | string): BlockHeader;
  getReceiptRoot(): Uint8Array | string;
  getReceiptRoot_asU8(): Uint8Array;
  getReceiptRoot_asB64(): string;
  setReceiptRoot(value: Uint8Array | string): BlockHeader;
  getLogsBloom(): Uint8Array | string;
  getLogsBloom_asU8(): Uint8Array;
  getLogsBloom_asB64(): string;
  setLogsBloom(value: Uint8Array | string): BlockHeader;

  hasDifficulty(): boolean;
  clearDifficulty(): void;
  getDifficulty(): BigInt | undefined;
  setDifficulty(value?: BigInt): BlockHeader;
  getNumber(): number;
  setNumber(value: number): BlockHeader;
  getGasLimit(): number;
  setGasLimit(value: number): BlockHeader;
  getGasUsed(): number;
  setGasUsed(value: number): BlockHeader;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): BlockHeader;
  getExtraData(): Uint8Array | string;
  getExtraData_asU8(): Uint8Array;
  getExtraData_asB64(): string;
  setExtraData(value: Uint8Array | string): BlockHeader;
  getMixHash(): Uint8Array | string;
  getMixHash_asU8(): Uint8Array;
  getMixHash_asB64(): string;
  setMixHash(value: Uint8Array | string): BlockHeader;
  getNonce(): number;
  setNonce(value: number): BlockHeader;
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): BlockHeader;
  getBaseFeePerGas(): Uint8Array | string;
  getBaseFeePerGas_asU8(): Uint8Array;
  getBaseFeePerGas_asB64(): string;
  setBaseFeePerGas(value: Uint8Array | string): BlockHeader;
  getRlp(): Uint8Array | string;
  getRlp_asU8(): Uint8Array;
  getRlp_asB64(): string;
  setRlp(value: Uint8Array | string): BlockHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeader.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockHeader
  ): BlockHeader.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BlockHeader,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeader;
  static deserializeBinaryFromReader(
    message: BlockHeader,
    reader: jspb.BinaryReader
  ): BlockHeader;
}

export namespace BlockHeader {
  export type AsObject = {
    parentHash: Uint8Array | string;
    uncleHash: Uint8Array | string;
    miner: Uint8Array | string;
    stateRoot: Uint8Array | string;
    transactionsRoot: Uint8Array | string;
    receiptRoot: Uint8Array | string;
    logsBloom: Uint8Array | string;
    difficulty?: BigInt.AsObject;
    number: number;
    gasLimit: number;
    gasUsed: number;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    extraData: Uint8Array | string;
    mixHash: Uint8Array | string;
    nonce: number;
    hash: Uint8Array | string;
    baseFeePerGas: Uint8Array | string;
    rlp: Uint8Array | string;
  };
}

export class Transaction extends jspb.Message {
  getTo(): Uint8Array | string;
  getTo_asU8(): Uint8Array;
  getTo_asB64(): string;
  setTo(value: Uint8Array | string): Transaction;
  getNonce(): number;
  setNonce(value: number): Transaction;

  hasGasPrice(): boolean;
  clearGasPrice(): void;
  getGasPrice(): BigInt | undefined;
  setGasPrice(value?: BigInt): Transaction;
  getGasLimit(): number;
  setGasLimit(value: number): Transaction;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): BigInt | undefined;
  setValue(value?: BigInt): Transaction;
  getInput(): Uint8Array | string;
  getInput_asU8(): Uint8Array;
  getInput_asB64(): string;
  setInput(value: Uint8Array | string): Transaction;
  getV(): Uint8Array | string;
  getV_asU8(): Uint8Array;
  getV_asB64(): string;
  setV(value: Uint8Array | string): Transaction;
  getR(): Uint8Array | string;
  getR_asU8(): Uint8Array;
  getR_asB64(): string;
  setR(value: Uint8Array | string): Transaction;
  getS(): Uint8Array | string;
  getS_asU8(): Uint8Array;
  getS_asB64(): string;
  setS(value: Uint8Array | string): Transaction;
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): Transaction;
  getFrom(): Uint8Array | string;
  getFrom_asU8(): Uint8Array;
  getFrom_asB64(): string;
  setFrom(value: Uint8Array | string): Transaction;
  getBlockNumber(): number;
  setBlockNumber(value: number): Transaction;
  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): Transaction;

  hasRlp(): boolean;
  clearRlp(): void;
  getRlp(): Uint8Array | string;
  getRlp_asU8(): Uint8Array;
  getRlp_asB64(): string;
  setRlp(value: Uint8Array | string): Transaction;

  hasMerkleProof(): boolean;
  clearMerkleProof(): void;
  getMerkleProof(): Proof | undefined;
  setMerkleProof(value?: Proof): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: Transaction
  ): Transaction.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Transaction,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(
    message: Transaction,
    reader: jspb.BinaryReader
  ): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    to: Uint8Array | string;
    nonce: number;
    gasPrice?: BigInt.AsObject;
    gasLimit: number;
    value?: BigInt.AsObject;
    input: Uint8Array | string;
    v: Uint8Array | string;
    r: Uint8Array | string;
    s: Uint8Array | string;
    hash: Uint8Array | string;
    from: Uint8Array | string;
    blockNumber: number;
    blockHash: Uint8Array | string;
    rlp: Uint8Array | string;
    merkleProof?: Proof.AsObject;
  };
}

export class Proof extends jspb.Message {
  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): Proof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof.AsObject;
  static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Proof,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Proof;
  static deserializeBinaryFromReader(
    message: Proof,
    reader: jspb.BinaryReader
  ): Proof;
}

export namespace Proof {
  export type AsObject = {
    proof: Uint8Array | string;
  };
}

export class BigInt extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): BigInt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigInt.AsObject;
  static toObject(includeInstance: boolean, msg: BigInt): BigInt.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BigInt,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BigInt;
  static deserializeBinaryFromReader(
    message: BigInt,
    reader: jspb.BinaryReader
  ): BigInt;
}

export namespace BigInt {
  export type AsObject = {
    value: Uint8Array | string;
  };
}

export class Log extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): Log;
  clearTopicsList(): void;
  getTopicsList(): Array<Uint8Array | string>;
  getTopicsList_asU8(): Array<Uint8Array>;
  getTopicsList_asB64(): Array<string>;
  setTopicsList(value: Array<Uint8Array | string>): Log;
  addTopics(value: Uint8Array | string, index?: number): Uint8Array | string;
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Log;
  getIndex(): number;
  setIndex(value: number): Log;
  getBlockIndex(): number;
  setBlockIndex(value: number): Log;
  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): Log;
  getTransactionIndex(): number;
  setTransactionIndex(value: number): Log;
  getTransactionHash(): Uint8Array | string;
  getTransactionHash_asU8(): Uint8Array;
  getTransactionHash_asB64(): string;
  setTransactionHash(value: Uint8Array | string): Log;

  hasRlp(): boolean;
  clearRlp(): void;
  getRlp(): Uint8Array | string;
  getRlp_asU8(): Uint8Array;
  getRlp_asB64(): string;
  setRlp(value: Uint8Array | string): Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(
    message: Log,
    reader: jspb.BinaryReader
  ): Log;
}

export namespace Log {
  export type AsObject = {
    address: Uint8Array | string;
    topicsList: Array<Uint8Array | string>;
    data: Uint8Array | string;
    index: number;
    blockIndex: number;
    blockHash: Uint8Array | string;
    transactionIndex: number;
    transactionHash: Uint8Array | string;
    rlp: Uint8Array | string;
  };
}

export class Receipt extends jspb.Message {
  getTo(): Uint8Array | string;
  getTo_asU8(): Uint8Array;
  getTo_asB64(): string;
  setTo(value: Uint8Array | string): Receipt;
  getFrom(): Uint8Array | string;
  getFrom_asU8(): Uint8Array;
  getFrom_asB64(): string;
  setFrom(value: Uint8Array | string): Receipt;
  getTransactionIndex(): number;
  setTransactionIndex(value: number): Receipt;
  getStatus(): boolean;
  setStatus(value: boolean): Receipt;
  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): Receipt;
  getGasUsed(): number;
  setGasUsed(value: number): Receipt;
  getCumulativeGasUsed(): number;
  setCumulativeGasUsed(value: number): Receipt;
  getLogsBloom(): Uint8Array | string;
  getLogsBloom_asU8(): Uint8Array;
  getLogsBloom_asB64(): string;
  setLogsBloom(value: Uint8Array | string): Receipt;
  clearLogsList(): void;
  getLogsList(): Array<Log>;
  setLogsList(value: Array<Log>): Receipt;
  addLogs(value?: Log, index?: number): Log;

  hasRlp(): boolean;
  clearRlp(): void;
  getRlp(): Uint8Array | string;
  getRlp_asU8(): Uint8Array;
  getRlp_asB64(): string;
  setRlp(value: Uint8Array | string): Receipt;

  hasMerkleProof(): boolean;
  clearMerkleProof(): void;
  getMerkleProof(): Proof | undefined;
  setMerkleProof(value?: Proof): Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipt.AsObject;
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Receipt,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Receipt;
  static deserializeBinaryFromReader(
    message: Receipt,
    reader: jspb.BinaryReader
  ): Receipt;
}

export namespace Receipt {
  export type AsObject = {
    to: Uint8Array | string;
    from: Uint8Array | string;
    transactionIndex: number;
    status: boolean;
    contractAddress: Uint8Array | string;
    gasUsed: number;
    cumulativeGasUsed: number;
    logsBloom: Uint8Array | string;
    logsList: Array<Log.AsObject>;
    rlp: Uint8Array | string;
    merkleProof?: Proof.AsObject;
  };
}
