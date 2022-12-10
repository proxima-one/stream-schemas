import { Bytes } from "@proximaone/stream-schema-base";
import { strict as assert } from "assert";

export class Address {
  private readonly bytes: Bytes;
  public static readonly size = 20;

  private constructor(bytes: Bytes) {
    assert(bytes.length == Address.size, "hash must be 20 bytes");
    this.bytes = bytes;
  }

  public static fromByteArray(value: Buffer): Address {
    const bytes = Bytes.fromByteArray(value);
    return new Address(bytes);
  }

  public static fromHexString(value: string): Address {
    const bytes = Bytes.fromHexString(value);
    return new Address(bytes);
  }

  public toHexString(): string {
    return this.bytes.toHexString();
  }

  public toByteArray(): Buffer {
    return this.bytes.toByteArray();
  }

  public equals(another: Address) {
    return this.toHexString() === another.toHexString();
  }
}
