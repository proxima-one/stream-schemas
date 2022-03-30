import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutTokensInput } from "../inputs/ChainCreateOrConnectWithoutTokensInput";
import { ChainCreateWithoutTokensInput } from "../inputs/ChainCreateWithoutTokensInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateNestedOneWithoutTokensInput", {
  isAbstract: true
})
export class ChainCreateNestedOneWithoutTokensInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutTokensInput, {
    nullable: true
  })
  create?: ChainCreateWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutTokensInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;
}
