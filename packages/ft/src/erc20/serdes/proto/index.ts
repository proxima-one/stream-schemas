import * as protobuf from "protobufjs";
import path from "path";
import { Serdes } from "@proximaone/stream-schema-base";
import { Approval, Event, Transfer } from "../../model";
import { Address, BlockchainRef, Hash } from "@proximaone/stream-schema-eth-base";
import BN from "bn.js";

const root = protobuf.loadSync(path.resolve(__dirname, "./schema.proto"));
if (!root)
  throw new Error(root);

const EventMsg = root.lookupType("Event");

export const ProtobufSerializer: Serdes<Event> = {
  serialize: (val: Event) => {
    const msg = EventMsg.create({
      transfer: val.type == "transfer" ? ({
        token: val.token.toByteArray(),
        from: val.from.toByteArray(),
        to: val.to.toByteArray(),
        value: val.value.toBuffer()
      }) : undefined,
      approval: val.type == "approval" ? ({
        token: val.token.toByteArray(),
        owner: val.owner.toByteArray(),
        spender: val.spender.toByteArray(),
        value: val.value.toBuffer()
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

    if (state.transfer) {
      return new Transfer(
        Address.fromByteArray(state.transfer.token),
        Address.fromByteArray(state.transfer.from),
        Address.fromByteArray(state.transfer.to),
        new BN(state.transfer.value),
        ref
      );
    }

    if (state.approval) {
      return new Approval(
        Address.fromByteArray(state.approval.token),
        Address.fromByteArray(state.approval.owner),
        Address.fromByteArray(state.approval.spender),
        new BN(state.approval.value),
        ref
      );
    }

    throw new Error("invalid message format: unknown event type");
  },
};
