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
  chainId: number;
  address: Address;
};

export type TakerStrategyEvent =
  OrderSummary & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;
};

export interface CreditMgvUser {
  type: "CreditMgvUser";

  mangroveId: core.MangroveId;
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

  mangroveId: core.MangroveId;
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

  mangroveId: core.MangroveId;
  outboundToken: Address;
  inboundToken: Address;
  offerId: OfferId
  owner: Address;
}

export interface OrderSummary {
  type: "OrderSummary";

  mangroveId: core.MangroveId;
  base: Address;
  quote: Address;
  taker: TakerId;
  selling: boolean;
  takerGot: Amount;
  takerGave: Amount;
  penalty: Amount;
  restingOrderId: OfferId;
}
