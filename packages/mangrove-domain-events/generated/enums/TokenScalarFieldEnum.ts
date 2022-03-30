import * as TypeGraphQL from "type-graphql";

export enum TokenScalarFieldEnum {
  id = "id",
  chainId = "chainId",
  symbol = "symbol",
  name = "name",
  decimals = "decimals"
}
TypeGraphQL.registerEnumType(TokenScalarFieldEnum, {
  name: "TokenScalarFieldEnum",
  description: undefined,
});
