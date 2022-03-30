import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutMangrovesInput } from "../inputs/ChainCreateOrConnectWithoutMangrovesInput";
import { ChainCreateWithoutMangrovesInput } from "../inputs/ChainCreateWithoutMangrovesInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateNestedOneWithoutMangrovesInput", {
  isAbstract: true
})
export class ChainCreateNestedOneWithoutMangrovesInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutMangrovesInput, {
    nullable: true
  })
  create?: ChainCreateWithoutMangrovesInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutMangrovesInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutMangrovesInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;
}
