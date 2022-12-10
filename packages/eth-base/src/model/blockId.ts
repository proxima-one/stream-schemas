import { Hash } from "./hash";

export class BlockId {
  public constructor(
    public readonly number: number,
    public readonly hash: Hash,
  ) {
  }

  public static parse(value: string): BlockId {
    const idx = value.indexOf("-");
    if (idx < 0)
      throw new Error(`invalid format: ${value}`);

    const number = parseInt(value.substring(0, idx));
    const hash = Hash.fromHexString(value.substring(idx + 1));

    return new BlockId(number, hash);
  }

  public toString() {
    return `${this.number}-${this.hash.toHexString()}`;
  }
}
