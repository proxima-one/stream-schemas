import {Address, Amount} from "@proximaone/stream-schema-base";

export interface OfferList {
  inboundToken: Address;
  outboundToken: Address;
}

export interface OfferListParams {
  active?: boolean;
  fee?: Amount;
  gasbase?: number; // todo: 24 bits
  density?: Amount;
}

export interface Offer {
  id: OfferId;
  prev: OfferId;
  wants: Amount;
  gives: Amount;
  gasprice: number; // todo: 16 bits
  gasreq: number; // todo: 24 bits
}

export interface MangroveParams {
  governance?: Address;
  monitor?: Address;
  vault?: Address;
  useOracle?: boolean;
  notify?: boolean;
  gasmax?: number; //todo: 24 bits
  gasprice?: number; //todo: 16 bits
  dead?: boolean;
}

export interface Order {
  taker: TakerId;
  takerGot: Amount;
  takerGave: Amount;
  penalty: Amount;
  takenOffers: TakenOffer[];
  feePaid: Amount;
}

export interface TakenOffer {
  id: OfferId;
  takerWants: Amount;
  takerGives: Amount;
  failReason?: OfferFailReason;
  posthookFailed?: boolean;
  posthookData?: string;
}

export interface OracleState {
  gasprice?: Amount;
}

export interface OrderRef {
  id: OrderId;
  offerList: OfferList;
}

export type MakerId = string;
export type TakerId = string;
export type OrderId = string;
export type OfferId = number;
export type MangroveId = Address;
export type OfferFailReason =
  | "mgv/makerRevert"
  | "mgv/makerAbort"
  | "mgv/makerTransferFail"
  | "mgv/makerReceiveFail";
export type Timestamp = number; // expressed in seconds since unix epoch
export type HexString = string;
