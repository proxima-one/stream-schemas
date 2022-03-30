import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutOrdersInput } from "../inputs/MangroveCreateWithoutOrdersInput";
import { MangroveUpdateWithoutOrdersInput } from "../inputs/MangroveUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("MangroveUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class MangroveUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => MangroveUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: MangroveUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutOrdersInput;
}
