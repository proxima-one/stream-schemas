import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveWhereInput } from "../inputs/MangroveWhereInput";

@TypeGraphQL.InputType("MangroveRelationFilter", {
  isAbstract: true
})
export class MangroveRelationFilter {
  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  is?: MangroveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  isNot?: MangroveWhereInput | undefined;
}
