export type GeneralizedDexEvent =
  AddDex |
  AssignPool |
  NewPoolTransaction;

export interface BlockchainEventBase extends JsonObject {
  ref?: BlockchainRef;
}

export interface AddDex extends BlockchainEventBase {
  type: "addDex";

  dex: Dex;
}

export interface AssignPool extends BlockchainEventBase {
  type: "assignPool";

  dexId: DexId;
  pool: Pool;
}

export interface NewPoolTransaction extends BlockchainEventBase {
  type: "newTx";

  transaction: PoolTransaction;
}

export interface PoolTransaction extends JsonObject {
  id: TransactionId;
  poolId: ExchangePoolId;
  dexId: DexId;
  sender: UserId;
  event: ExchangePoolEvent;
}

export interface Dex extends JsonObject {
  id: DexId;
  network: Network;
  displayName: string;
  protocol: DexProtocol | string;
}

export type DexProtocol = "uniswap2" | "uniswap3";

export interface Network extends JsonObject {
  name: string;
  chainId?: number;
}

export interface Pool extends JsonObject {
  id: ExchangePoolId;
  assets: Asset[];
  lp?: Asset;
}

export interface PoolLiquidity extends JsonObject {
  assets: Amount[];
  lp?: Amount;
}

export interface ExchangePoolEvent extends JsonObject {
  type: "swap" | "add" | "remove" | "other";
  liquidityChange: PoolLiquidity;
  prices?: Amount[]; // prices weight
}

export interface BlockchainRef extends JsonObject {
  blockNumber?: number;
  blockHash?: string;
  txHash?: string;
}

export type UserId = string;
export type TransactionId = string;
export type ExchangePoolId = string;
export type Amount = string;
export type Asset = string;
export type DexId = string;

// JSON constraints
interface ComplexValue extends Readonly<Record<string, Value>> {}
interface ArrayValue extends ReadonlyArray<Value> {}
type Value = ArrayValue | ComplexValue | string | number | boolean | undefined | null;

export type JsonObject = ComplexValue;