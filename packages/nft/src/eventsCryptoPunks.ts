export interface Assign {
  type: "assign";

  id: string;
  chain: string;

  to: string;
  punkIndex: string;
}

export interface FundTransfer {
  type: "transfer";

  id: string;
  chain: string;

  contract: string;
  from: string;
  to: string;
  value: string;
}

export interface PunkTransfer {
  type: "punkTransfer";

  id: string;
  chain: string;

  contract: string;
  from: string;
  to: string;
  punkIndex: string;
}

export interface PunkOffered {
  type: "punkOffered";

  id: string;
  chain: string;

  contract: string;
  punkIndex: number;
  minValue: number;
  toAddress: string;
}

export interface PunkBidEntered {
  type: "punkBidEntered";

  id: string;
  chain: string;

  contract: string;
  punkIndex: number;
  value: number;
  fromAddress: string;
}

export interface PunkBidWithdrawn {
  type: "punkBidWithdrawn";

  id: string;
  chain: string;

  contract: string;
  punkIndex: number;
  value: number;
  fromAddress: string;
}

export interface PunkBought {
  type: "punkBought";

  id: string;
  chain: string;

  contract: string;
  value: number;
  fromAddress: string;
  toAddress: string;
}

export interface PunkNoLongerForSale {
  type: "punkNoLongerForSale";

  id: string;
  chain: string;

  contract: string;
  punkIndex: number;
}
