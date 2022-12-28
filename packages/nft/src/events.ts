export interface NftSale {
  type: "nftSale";

  id: string;
  chain: string;

  tokenCollectionId: string;
  from: string;
  to: string;
  tokenNumber: string;
  price: CurrencyAmount;
}

export interface CurrencyAmount {
  amount: string;
  fiat?: Fiat;
  token?: Token;
}

export interface Fiat {
  isoCode: string;
}

export interface Token {
  symbol: string,
  network?: string,
  address?: string,
}
