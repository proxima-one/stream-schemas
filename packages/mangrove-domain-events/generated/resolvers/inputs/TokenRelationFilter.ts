import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenWhereInput } from "../inputs/TokenWhereInput";

@TypeGraphQL.InputType("TokenRelationFilter", {
  isAbstract: true
})
export class TokenRelationFilter {
  @TypeGraphQL.Field(_type => TokenWhereInput, {
    nullable: true
  })
  is?: TokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => TokenWhereInput, {
    nullable: true
  })
  isNot?: TokenWhereInput | undefined;
}
