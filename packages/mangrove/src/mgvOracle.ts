import { TxRef } from "@proximaone/stream-schema-base";

export type MgvOracleEvent = MgvOracleBaseEvent & (SetGasprice | SetDensity)

export type SetGasprice = {
    type: "SetGasprice";
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