import { Serdes } from "./serialization";

export interface NodePackageSchema<T> {
  type: "npm";
  id: string;
  name: string;
  version: string;
  serdes: Serdes<T>;
}

// export interface JsonSchema {
//   type: "json";
//   id: string;
//   name: string;
//   version: string;
// }

export type EventStreamSchema<T> = NodePackageSchema<T>


export enum StreamType {
  STATELESS,
  STATEFUL,
  QUERY,
  SOURCE
}

export interface EventStream {
  id: string;
  process_id: string;
  name: string;
  type: StreamType;
  schema: string;
}

export interface EventStreamProcessSchema {
  id: string;
  name: string;
  owner: string;
  version: string;
  input_streams: Array<EventStreamProcessSchema>;
  output_streams: Array<EventStreamProcessSchema>;
  container_id: string; 
  build: string;
}