import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutChainInput } from "../inputs/TokenCreateWithoutChainInput";
import { TokenUpdateWithoutChainInput } from "../inputs/TokenUpdateWithoutChainInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpsertWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class TokenUpsertWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutChainInput, {
    nullable: false
  })
  update!: TokenUpdateWithoutChainInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutChainInput, {
    nullable: false
  })
  create!: TokenCreateWithoutChainInput;
}
