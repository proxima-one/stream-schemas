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

  tokenCollectionId: string;
  from: string;
  to: string;
  tokenNumber: string;
}

export interface Approval {
  type: "approval";

  id: string;
  chain: string;

  tokenCollectionId: string;
  owner: string;
  approved: string;
  tokenNumber: string;
}

export interface ApprovalForAll {
  type: "approvalForAll";

  id: string;
  chain: string;

  tokenCollectionId: string;
  owner: string;
  operator: string;
  approved: boolean;
}
