import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutOrdersInput } from "../inputs/MangroveCreateWithoutOrdersInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class MangroveCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutOrdersInput;
}
