import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutChainInput } from "../inputs/MangroveCreateWithoutChainInput";
import { MangroveUpdateWithoutChainInput } from "../inputs/MangroveUpdateWithoutChainInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpsertWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class MangroveUpsertWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutChainInput, {
    nullable: false
  })
  update!: MangroveUpdateWithoutChainInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutChainInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutChainInput;
}
