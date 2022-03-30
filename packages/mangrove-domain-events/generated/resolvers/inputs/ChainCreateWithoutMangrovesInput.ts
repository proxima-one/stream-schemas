import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateNestedManyWithoutChainInput } from "../inputs/TokenCreateNestedManyWithoutChainInput";

@TypeGraphQL.InputType("ChainCreateWithoutMangrovesInput", {
  isAbstract: true
})
export class ChainCreateWithoutMangrovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TokenCreateNestedManyWithoutChainInput, {
    nullable: true
  })
  tokens?: TokenCreateNestedManyWithoutChainInput | undefined;
}
