import { Address, Amount, TxRef } from "@proximaone/stream-schema-base";
import { OfferId, Timestamp, HexString, TakerId, OrderId } from "./core";
import * as core from "./core";

export type StrategyEvent = (
  | OrderSummary
  | NewOwnedOffer
  | SetExpiry
  | LogIncident) & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;
};

export interface NewOwnedOffer {
  type: "NewOwnedOffer";

  mangroveId: core.MangroveId;
  outboundToken: Address;
  inboundToken: Address;
  offerId: OfferId
  owner: Address;
}

export interface OrderSummary {
  type: "OrderSummary";

  mangroveId: core.MangroveId;
  orderId: OrderId;
  outboundToken: Address;
  inboundToken: Address;
  taker: TakerId;
  fillOrKill: boolean;
  takerWants: Amount;
  takerGives: Amount;
  fillWants: boolean;
  restingOrder: boolean;
  expiryDate: Timestamp;
  takerGot: Amount;
  takerGave: Amount;
  bounty: Amount;
  fee: Amount;
  restingOrderId: OfferId;
}

export interface SetExpiry {
  type: "SetExpiry";

  outboundToken: Address;
  inboundToken: Address;
  offerId: OfferId;
  date: Timestamp;
}

export interface LogIncident {
  type: "LogIncident";

  mangroveId: core.MangroveId;
  outboundToken: Address;
  inboundToken: Address;
  offerId: OfferId;
  makerData: HexString;
  mgvData: HexString;
}
