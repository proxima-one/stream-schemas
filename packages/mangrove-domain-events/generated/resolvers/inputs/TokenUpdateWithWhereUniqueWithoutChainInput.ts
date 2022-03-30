import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenUpdateWithoutChainInput } from "../inputs/TokenUpdateWithoutChainInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpdateWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class TokenUpdateWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutChainInput, {
    nullable: false
  })
  data!: TokenUpdateWithoutChainInput;
}
