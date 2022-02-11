import { Serdes } from "./serialization";

export enum StreamType {
  STATELESS,
  STATEFUL,
  QUERY,
  SOURCE
}

export interface EventStreamSchema<T> {
  id: string;
  process_id: string;
  name: string;
  version: string;
  type: StreamType;
  serdes: Serdes<T>;
}

export interface EventStreamProcessSchema<T> {
  id: string;
  name: string;
  owner: string;
  version: string;
  input_streams: Array<EventStreamProcessSchema<T>>;
  output_streams: Array<EventStreamProcessSchema<T>>;
  container_id: string; 
  build: string;
}