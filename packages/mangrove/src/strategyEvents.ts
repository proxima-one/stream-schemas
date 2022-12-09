import { Address, Amount, TxRef } from "@proximaone/stream-schema-base";
import { OfferId, Date, HexString, TakerId } from "./core";
import * as core from "./core";

export type StrategyEvent = (
  | OrderSummary
  | NewOwnedOffer
  | LogIncindent) & {
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
  outboundToken: Address;
  inboundToken: Address;
  taker: TakerId;
  fillOrKill: boolean;
  takerWants: Amount;
  takerGives: Amount;
  fillWants: boolean;
  restingOrder: boolean;
  expiryDate: Date;
  takerGot: Amount;
  takerGave: Amount;
  bounty: Amount;
  fee: Amount;
  restingOrderId: OfferId;
}

export interface LogIncindent {
  type: "LogIncindent";

  mangroveId: core.MangroveId;
  outboundToken: Address;
  inboundToken: Address;
  offerId: OfferId;
  makerData: HexString;
  mgvData: HexString;
}
