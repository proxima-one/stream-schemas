import * as core from "./core";
import {Address, Amount, TxRef} from "@proximaone/stream-schema-base";

export type MangroveEvent = (
  | TakerApprovalUpdated
  | MakerBalanceUpdated
  | OfferListParamsUpdated
  | MangroveCreated
  | MangroveParamsUpdated
  | OfferWritten
  | OfferRetracted
  | OrderCompleted
  ) & {
  tx: Pick<TxRef, "blockNumber" | "blockHash" | "sender" | "txHash" >;
  mangroveId: core.MangroveId;
  chainId: number;
  parentOrder?: core.OrderRef; // not empty in case event is emitted in callback/posthook functions
};

export interface TakerApprovalUpdated {
  type: "TakerApprovalUpdated";

  owner: Address;
  offerList: core.OfferList;
  spender: Address;
  amount: Amount;
}

export interface MakerBalanceUpdated {
  type: "MakerBalanceUpdated";

  maker: core.MakerId;
  amountChange: Amount;
}

export interface OfferListParamsUpdated {
  type: "OfferListParamsUpdated";

  offerList: core.OfferList;
  params: core.OfferListParams;
}

export interface MangroveParamsUpdated {
  type: "MangroveParamsUpdated";

  params: core.MangroveParams;
}

export interface MangroveCreated {
  type: "MangroveCreated";

  id: string;
  address: string;
  chain: {
    name: string;
    chainlistId: number;
  };
}

export interface OfferWritten {
  type: "OfferWritten";

  offerList: core.OfferList;
  offer: core.Offer;
  maker: core.MakerId;
}

export interface OfferRetracted {
  type: "OfferRetracted";

  offerList: core.OfferList;
  offerId: core.OfferId;
}

export interface OrderCompleted {
  type: "OrderCompleted";

  id: core.OrderId;
  offerList: core.OfferList;
  order: core.Order;
}

//
// export interface OracleStateUpdated {
//   type: 'OracleStateUpdated';
//
//   state: core.OracleState;
// }
