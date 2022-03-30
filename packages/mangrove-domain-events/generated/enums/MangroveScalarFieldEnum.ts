import * as TypeGraphQL from "type-graphql";

export enum MangroveScalarFieldEnum {
  id = "id",
  chainId = "chainId",
  address = "address",
  governance = "governance",
  monitor = "monitor",
  vault = "vault",
  useOracle = "useOracle",
  notify = "notify",
  gasmax = "gasmax",
  gasprice = "gasprice",
  dead = "dead"
}
TypeGraphQL.registerEnumType(MangroveScalarFieldEnum, {
  name: "MangroveScalarFieldEnum",
  description: undefined,
});
