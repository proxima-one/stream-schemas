import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveWhereInput } from "../inputs/MangroveWhereInput";

@TypeGraphQL.InputType("MangroveListRelationFilter", {
  isAbstract: true
})
export class MangroveListRelationFilter {
  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  every?: MangroveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  some?: MangroveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  none?: MangroveWhereInput | undefined;
}
