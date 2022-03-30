import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveUpdateWithoutChainInput } from "../inputs/MangroveUpdateWithoutChainInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateWithWhereUniqueWithoutChainInput", {
  isAbstract: true
})
export class MangroveUpdateWithWhereUniqueWithoutChainInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutChainInput, {
    nullable: false
  })
  data!: MangroveUpdateWithoutChainInput;
}
