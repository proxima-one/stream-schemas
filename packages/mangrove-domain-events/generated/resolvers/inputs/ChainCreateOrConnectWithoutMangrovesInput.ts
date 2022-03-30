import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutMangrovesInput } from "../inputs/ChainCreateWithoutMangrovesInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainCreateOrConnectWithoutMangrovesInput", {
  isAbstract: true
})
export class ChainCreateOrConnectWithoutMangrovesInput {
  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutMangrovesInput, {
    nullable: false
  })
  create!: ChainCreateWithoutMangrovesInput;
}
