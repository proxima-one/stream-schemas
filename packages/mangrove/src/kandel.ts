import { Address, Amount, TxRef } from "@proximaone/stream-schema-base";


export type SeederEvent = (NewAaveKandel | NewKandel) & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;
};

export type KandelEvent = (
  | AllBids
  | AllAsks
  | SetCompoundRates
  | SetGasprice
  | SetGasreq
  | Credit
  | Debit
  | SetGeometricParams
  | SetLength
) & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;
};

export interface NewAaveKandel {
  type: "NewAaveKandel";

  owner: Address;
  base: Address;
  quote: Address;
  aaveKandel: Address;
  reserveId: Address;
}

export interface NewKandel {
  type: "NewKandel";

  owner: Address;
  base: Address;
  quote: Address;
  kandel: Address;
}

export interface AllBids {
  type: "AllBids";
}

export interface AllAsks {
  type: "AllAsks";
}

export interface SetCompoundRates {
  type: "SetCompoundRates";

  compoundRateBase: number;
  compoundRateQuote: number;
}

export interface SetGasprice {
  type: "SetGasprice";

  value: Amount;
}

export interface SetGasreq {
  type: "SetGasreq";

  value: Amount;
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

export interface SetGeometricParams {
  type: "SetGeometricParams";

  spread: number;
  ratio: number;
}

export interface SetLength {
  type: "SetLength";

  value: number;
}
