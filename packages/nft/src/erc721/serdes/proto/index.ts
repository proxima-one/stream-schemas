import * as protobuf from "protobufjs";
import path from "path";
import { Bytes, Serdes } from "@proximaone/stream-schema-base";
import { Approval, ApprovalForAll, Event, Transfer } from "../../model";
import { Address, BlockchainRef, Hash } from "@proximaone/stream-schema-eth-base";
import BigNumber from "bignumber.js";

const root = protobuf.loadSync(path.resolve(__dirname, "./schema.proto"));
if (!root)
  throw new Error(root);

const EventMsg = root.lookupType("Event");

export const ProtobufSerializer: Serdes<Event> = {
  serialize: (val: Event) => {
    const msg = EventMsg.create({
      transfer: val.type == "transfer" ? ({
        collection: val.collection.toByteArray(),
        tokenNumber: val.tokenNumber,
        from: val.from.toByteArray(),
        to: val.to.toByteArray()
      }) : undefined,
      approval: val.type == "approval" ? ({
        collection: val.collection.toByteArray(),
        tokenNumber: val.tokenNumber,
        owner: val.owner.toByteArray(),
        approved: val.approved.toByteArray()
      }) : undefined,
      approvalForAll: val.type == "approvalForAll" ? ({
        collection: val.collection.toByteArray(),
        owner: val.owner.toByteArray(),
        operator: val.operator.toByteArray()
      }) : undefined,
      ref: {
        blockNumber: val.ref.blockNumber,
        blockHash: val.ref.blockHash?.toByteArray(),
        txHash: val.ref.txHash?.toByteArray()
      },
    });
    return Buffer.from(EventMsg.encode(msg).finish());
  },
  deserialize: (buffer: Buffer) => {
    const msg = EventMsg.decode(buffer);

    const state = EventMsg.toObject(msg, {
      enums: String,
      bytes: Buffer,
      longs: Number,
      arrays: true,
    });

    const ref = new BlockchainRef(
      state.ref.blockNumber,
      Hash.fromByteArray(state.ref.blockHash),
      Hash.fromByteArray(state.ref.txHash),
    );

    if (state.transfer)
      return new Transfer(
        Address.fromByteArray(state.transfer.collection),
        state.transfer.tokenNumber,
        Address.fromByteArray(state.transfer.from),
        Address.fromByteArray(state.transfer.to),
        ref
      );

    if (state.approval)
      return new Approval(
        Address.fromByteArray(state.approval.collection),
        state.approval.tokenNumber,
        Address.fromByteArray(state.approval.owner),
        Address.fromByteArray(state.approval.approved),
        ref
      );

    if (state.approvalForAll)
      return new ApprovalForAll(
        Address.fromByteArray(state.approvalForAll.collection),
        Address.fromByteArray(state.approvalForAll.owner),
        Address.fromByteArray(state.approvalForAll.operator),
        ref
      );

    throw new Error("invalid message format: unknown event type");
  },
};
