// package: 
// file: proto/block.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_block_pb from "../proto/block_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IEthereumTransactionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
}


export const EthereumTransactionsService: IEthereumTransactionsService;

export interface IEthereumTransactionsServer extends grpc.UntypedServiceImplementation {
}

export interface IEthereumTransactionsClient {
}

export class EthereumTransactionsClient extends grpc.Client implements IEthereumTransactionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
}
