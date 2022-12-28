import { Bytes } from "@proximaone/stream-schema-base";
import { strict as assert } from "assert";

export class Hash {
  private readonly bytes: Bytes;

  private constructor(bytes: Bytes) {
    assert(bytes.length == 32, "hash must be 32 bytes");

    this.bytes = bytes;
  }

  public static fromByteArray(value: Buffer): Hash {
    const bytes = Bytes.fromByteArray(value);
    return new Hash(bytes);
  }

  public static fromHexString(value: string): Hash {
    const bytes = Bytes.fromHexString(value);
    return new Hash(bytes);
  }

  public toHexString(): string {
    return this.bytes.toHexString();
  }

  public toByteArray(): Buffer {
    return this.bytes.toByteArray();
  }
}
