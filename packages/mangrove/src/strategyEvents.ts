import { Address, Amount, TxRef } from "@proximaone/stream-schema-base";
import { OfferId, OrderId, TakerId } from "./core";
import * as core from "./core";

export type MultiUserStrategyEvent = (
  | CreditMgvUser
  | CreditUserTokenBalance
  | DebitMgvUser
  | DebitUserTokenBalance
  | NewOwnedOffer) & {
  tx: TxRef;
  id: string;
  address: Address;
};

export type TakerStrategyEvent =
  OrderSummary & {
  tx: TxRef;
  id: string;
  mangroveId: core.MangroveId;
  chainId: number;
  address: Address;
};

export interface CreditMgvUser {
  type: "CreditMgvUser";

  user: Address;
  amount: Amount;
}

export interface CreditUserTokenBalance {
  type: "CreditUserTokenBalance";

  user: Address;
  token: Address;
  amount: Amount;
}

export interface DebitMgvUser {
  type: "DebitMgvUser";

  user: Address;
  amount: Amount;
}

export interface DebitUserTokenBalance {
  type: "DebitUserTokenBalance";

  user: Address;
  token: Address;
  amount: Amount;
}

export interface NewOwnedOffer {
  type: "NewOwnedOffer";

  outboundToken: Address;
  inboundToken: Address;
  offerId: OfferId
  owner: Address;
}

export interface OrderSummary {
  type: "OrderSummary";

  base: Address;
  quote: Address;
  taker: TakerId;
  selling: boolean;
  takerGot: Amount;
  takerGave: Amount;
  penalty: Amount;
  restingOrderId: OfferId;
}
