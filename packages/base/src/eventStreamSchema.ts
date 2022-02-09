import { Serdes } from "./serialization";

export interface EventStreamSchema<T> {
  name: string;
  version: string;
  serdes: Serdes<T>;

}
