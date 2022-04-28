// package: 
// file: src/apps/parseBlocks/proto/block.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as src_apps_parseBlocks_proto_block_pb from "../../../../src/apps/parseBlocks/proto/block_pb";
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
