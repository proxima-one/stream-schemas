interface Object extends Readonly<Record<string, Value>> {}
interface Array extends ReadonlyArray<Value> {}
type Value = Array | Object | string | number | boolean | undefined | null;

export type JsonObject = Object;
export type JsonValue = Value;
