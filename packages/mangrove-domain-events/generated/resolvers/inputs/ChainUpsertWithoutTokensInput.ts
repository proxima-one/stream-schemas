import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutTokensInput } from "../inputs/ChainCreateWithoutTokensInput";
import { ChainUpdateWithoutTokensInput } from "../inputs/ChainUpdateWithoutTokensInput";

@TypeGraphQL.InputType("ChainUpsertWithoutTokensInput", {
  isAbstract: true
})
export class ChainUpsertWithoutTokensInput {
  @TypeGraphQL.Field(_type => ChainUpdateWithoutTokensInput, {
    nullable: false
  })
  update!: ChainUpdateWithoutTokensInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutTokensInput, {
    nullable: false
  })
  create!: ChainCreateWithoutTokensInput;
}
