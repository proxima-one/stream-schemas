import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutTakerApprovalsInput } from "../inputs/MangroveCreateWithoutTakerApprovalsInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateOrConnectWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class MangroveCreateOrConnectWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutTakerApprovalsInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutTakerApprovalsInput;
}
