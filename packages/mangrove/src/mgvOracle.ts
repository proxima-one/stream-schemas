import { TxRef } from "@proximaone/stream-schema-base";

export type MgvOracleEvent = MgvOracleBaseEvent & (SetGasPrice | SetDensity)

export type SetGasPrice = {
    type: "SetGasPrice";
    parameters: {
        gasPrice: string;
    }
};

export type SetDensity = {
    type: "SetDensity";
    parameters: {
        density: string;
    }
};

export type MgvOracleBaseEvent = {
    logIndex: number;
    address: string;
    tx: TxRef
};