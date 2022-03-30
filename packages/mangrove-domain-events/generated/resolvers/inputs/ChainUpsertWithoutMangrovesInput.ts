import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateWithoutMangrovesInput } from "../inputs/ChainCreateWithoutMangrovesInput";
import { ChainUpdateWithoutMangrovesInput } from "../inputs/ChainUpdateWithoutMangrovesInput";

@TypeGraphQL.InputType("ChainUpsertWithoutMangrovesInput", {
  isAbstract: true
})
export class ChainUpsertWithoutMangrovesInput {
  @TypeGraphQL.Field(_type => ChainUpdateWithoutMangrovesInput, {
    nullable: false
  })
  update!: ChainUpdateWithoutMangrovesInput;

  @TypeGraphQL.Field(_type => ChainCreateWithoutMangrovesInput, {
    nullable: false
  })
  create!: ChainCreateWithoutMangrovesInput;
}
