export interface Serdes<T> {
  serialize(val: T): Buffer;
  deserialize(buffer: Buffer): T;
}
