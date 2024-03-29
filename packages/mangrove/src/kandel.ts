import { Address, Amount, TxRef } from "@proximaone/stream-schema-base";
import { OfferId } from "./core";
import { OfferRetracted, OfferWritten } from "./events";
import * as core from "./core";

export type KandelEvent = (
  | NewKandel
  | SetParams
  | Credit
  | Debit
  | Populate
  | Retract
  | SetIndexMapping
) & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;
};

export interface NewKandel {
  type: "NewKandel" | "NewAaveKandel";

  mangroveId: core.MangroveId;
  owner: Address;
  base: Address;
  quote: Address;
  kandel: Address;
  reserveId: Address;
  params: SetParams;
}

export interface SetParams {
  type: "SetParams";
  reserveId?: Address;
  mangrove?: Address;
  pair?: {
    base: Address;
    quote: Address;
  }
  compoundRates?: {
    base: number;
    quote: number;
  };
  geometric?: {
    spread: number;
    ratio: number;
  },
  gasPrice?: Amount;
  gasReq?: Amount;
  length?: number;
  admin?: Address;
  router?: Address;
}

export interface SetIndexMapping {
  type: "SetIndexMapping";

  ba: number;
  index: number;
  offerId: OfferId;
}

export interface Credit {
  type: "Credit";

  token: Address;
  amount: Amount;
}

export interface Debit {
  type: "Debit";

  token: Address;
  amount: Amount;
}

export interface Populate {
  type: "Populate";
  offers: OfferWritten[];
  indexMapping: SetIndexMapping[];
}

export interface Retract {
  type: "Retract";
  offers: OfferRetracted[]
}
