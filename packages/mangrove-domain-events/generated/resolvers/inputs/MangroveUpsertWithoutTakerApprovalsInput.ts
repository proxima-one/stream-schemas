import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutTakerApprovalsInput } from "../inputs/MangroveCreateWithoutTakerApprovalsInput";
import { MangroveUpdateWithoutTakerApprovalsInput } from "../inputs/MangroveUpdateWithoutTakerApprovalsInput";

@TypeGraphQL.InputType("MangroveUpsertWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class MangroveUpsertWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => MangroveUpdateWithoutTakerApprovalsInput, {
    nullable: false
  })
  update!: MangroveUpdateWithoutTakerApprovalsInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutTakerApprovalsInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutTakerApprovalsInput;
}
