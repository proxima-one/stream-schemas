export interface NewNftCollection {
  type: "newCollection";

  id: string;
  chain: string;

  contractAddress: string;
  symbol: string;
  name: string;
}

export interface Transfer {
  type: "transfer";

  id: string;
  chain: string;

  contract: string;
  from: string;
  to: string;
  tokenId: string;
}

export interface Approval {
  type: "approval";

  id: string;
  chain: string;

  contract: string;
  owner: string;
  approved: string;
  tokenId: string;
}

export interface ApprovalForAll {
  type: "approvalForAll";

  id: string;
  chain: string;

  contract: string;
  owner: string;
  operator: string;
  approved: boolean;
}
