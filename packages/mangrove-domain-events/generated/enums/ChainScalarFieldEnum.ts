import * as TypeGraphQL from "type-graphql";

export enum ChainScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(ChainScalarFieldEnum, {
  name: "ChainScalarFieldEnum",
  description: undefined,
});
