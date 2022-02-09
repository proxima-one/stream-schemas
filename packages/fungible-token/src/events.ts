export interface NewToken {
  type: "new";

  token: string;
  symbol: string;
  name: string;
  totalSupply: string;
  decimals?: number;
}

export interface Transfer {
  type: "transfer";

  token: string;
  from: string;
  to: string;
  value: string;
}

export interface Approval {
  type: "approval";

  token: string;
  owner: string;
  spender: string;
  value: string;
}
