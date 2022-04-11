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

export interface TxRef extends JsonObject {
  blockNumber?: number;
  blockHash?: string;
  txHash?: string;
  sender?: UserId;
}

export interface Transfer extends JsonObject {
  from?: UserId;
  to: UserId;
  asset: Asset;
  value: Amount;
}

export type UserId = string;
export type PoolId = string;
export type AmmDexId = string;
export type Amount = string;
export type Asset = string;

// JSON constraints
interface ComplexValue extends Readonly<Record<string, Value>> {}
interface ArrayValue extends ReadonlyArray<Value> {}
type Value = ArrayValue | ComplexValue | string | number | boolean | undefined | null;

export type JsonObject = ComplexValue;
