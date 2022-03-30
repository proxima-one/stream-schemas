import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateOrConnectWithoutOwnedTakerApprovalsInput";
import { AccountCreateWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateWithoutOwnedTakerApprovalsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedOneWithoutOwnedTakerApprovalsInput", {
  isAbstract: true
})
export class AccountCreateNestedOneWithoutOwnedTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  create?: AccountCreateWithoutOwnedTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutOwnedTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
