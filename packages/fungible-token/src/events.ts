export interface NewToken {
  type: "new";

  id: string;
  chain: string;

  contractAddress: string;
  symbol: string;
  name: string;
  totalSupply: string;
  decimals?: number;
}

export interface Transfer {
  type: "transfer";

  id: string;
  chain: string;

  tokenId: string;
  from: string;
  to: string;
  value: string;
}

export interface Approval {
  type: "approval";

  id: string;
  chain: string;

  tokenId: string;
  owner: string;
  spender: string;
  value: string;
}
