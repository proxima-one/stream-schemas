import { Serdes } from "./serdes";

export function json<T>(): Serdes<T> {
  // todo: support long.js and bignumber.js
  return {
    serialize(val: T): Buffer {
      return Buffer.from(JSON.stringify(val))
    },
    deserialize(buffer: Buffer): T {
      return JSON.parse(buffer.toString()) as T;
    }
  };
}
