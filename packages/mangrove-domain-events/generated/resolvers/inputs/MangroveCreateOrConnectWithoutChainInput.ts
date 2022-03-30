import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutChainInput } from "../inputs/MangroveCreateWithoutChainInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateOrConnectWithoutChainInput", {
  isAbstract: true
})
export class MangroveCreateOrConnectWithoutChainInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutChainInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutChainInput;
}
