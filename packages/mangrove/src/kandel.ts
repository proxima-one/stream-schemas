import { Address, Amount, TxRef } from "@proximaone/stream-schema-base";


export type SeederEvent = NewKandel & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;

  mangrove?: Address;
  reserveId?: Address;
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
};

export type KandelEvent = (
  | AllBids
  | AllAsks
  | Credit
  | Debit
) & {
  tx: TxRef;
  id: string;
  chainId: number;
  address: Address;
};

export interface NewKandel {
  type: "NewKandel" | "NewAaveKandel";

  owner: Address;
  base: Address;
  quote: Address;
  kandel: Address;
  reserveId?: Address;
}

export interface AllBids {
  type: "AllBids";
}

export interface AllAsks {
  type: "AllAsks";
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
