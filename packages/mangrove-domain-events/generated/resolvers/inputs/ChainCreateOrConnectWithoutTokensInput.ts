import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutTokensInput } from "../inputs/ChainCreateWithoutTokensInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateOrConnectWithoutTokensInput", {
  isAbstract: true
})
export class ChainCreateOrConnectWithoutTokensInput {
  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutTokensInput, {
    nullable: false
  })
  create!: ChainCreateWithoutTokensInput;
}
