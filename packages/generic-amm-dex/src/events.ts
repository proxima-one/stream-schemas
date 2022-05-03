import { JsonObject, Amount, Address, TxRef as TxRefBase } from "@proximaone/stream-schema-base";

export type GeneralizedAmmDexEvent =
  NewAmmDex |
  NewPool |
  PoolUpdate;

export interface BlockchainEventBase extends JsonObject {
  ref?: TxRef;
}

export interface NewAmmDex extends BlockchainEventBase {
  type: "newDex";

  dex: AmmDex;
}

export interface NewPool extends BlockchainEventBase {
  type: "newPool";

  pool: Pool;
  dexId: AmmDexId;
  state: PoolState;
}

export interface PoolUpdate extends BlockchainEventBase {
  type: "poolUpdate";

  dexId: AmmDexId;
  poolId: PoolId;
  oldState: PoolState;
  newState: PoolState;
  event?: PoolEvent;
}

export interface PoolState extends JsonObject {
  liquidity: Amount[];
  priceWeights?: Amount[];
}

export type PoolEvent = SwapEvent | MintEvent | BurnEvent | undefined;

export interface SwapEvent extends JsonObject {
  type: "swap";
  amounts: Amount[];
}

export interface MintEvent extends JsonObject {
  type: "mint";
  lpTransfer?: Transfer;
}

export interface BurnEvent extends JsonObject {
  type: "burn";
  lpTransfer?: Transfer;
}


export interface AmmDex extends JsonObject {
  id: AmmDexId;
  network: Network;
  displayName: string;
  protocol: AmmDexProtocol | string;
}

export type AmmDexProtocol = "uniswap2" | "uniswap3";

export interface Network extends JsonObject {
  name: string;
  chainId?: number;
}

export interface Pool extends JsonObject {
  id: PoolId;
  assets: Asset[];
  lp?: Asset;
}

export type TxRef = Partial<Omit<TxRefBase, "chain">>;

export interface Transfer extends JsonObject {
  from?: UserId;
  to: UserId;
  value: Amount;
}

export type UserId = Address;
export type PoolId = Address;
export type AmmDexId = string;
export type Asset = Address;
