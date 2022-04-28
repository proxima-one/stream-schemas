import { Serdes } from "./serdes";

export interface Encodable<T> {
    encode(): Buffer;
    decode<T>(buf: Buffer): T;
}


// export function proto<T exEncodable>(): Serdes<Encodable> {
//   // todo: support long.js and bignumber.js
//   return {
//     serialize(val: Encodable): Buffer {
//       return Buffer.from(Encodable.encode(val).finished())
//     },
//     deserialize<T>(buffer: Buffer): T {
//       return T.decode(buffer) as T;
//     }
//   };
// }
