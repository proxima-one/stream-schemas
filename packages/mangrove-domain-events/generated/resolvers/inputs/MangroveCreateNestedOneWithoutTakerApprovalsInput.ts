import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutTakerApprovalsInput } from "../inputs/MangroveCreateOrConnectWithoutTakerApprovalsInput";
import { MangroveCreateWithoutTakerApprovalsInput } from "../inputs/MangroveCreateWithoutTakerApprovalsInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateNestedOneWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class MangroveCreateNestedOneWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutTakerApprovalsInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutTakerApprovalsInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;
}
