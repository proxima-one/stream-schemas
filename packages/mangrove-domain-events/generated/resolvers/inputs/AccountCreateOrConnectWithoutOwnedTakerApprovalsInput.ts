import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateWithoutOwnedTakerApprovalsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutOwnedTakerApprovalsInput", {
  isAbstract: true
})
export class AccountCreateOrConnectWithoutOwnedTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: false
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutOwnedTakerApprovalsInput, {
    nullable: false
  })
  create!: AccountCreateWithoutOwnedTakerApprovalsInput;
}
