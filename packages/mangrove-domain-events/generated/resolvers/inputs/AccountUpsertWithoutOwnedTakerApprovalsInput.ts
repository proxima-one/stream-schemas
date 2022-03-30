import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateWithoutOwnedTakerApprovalsInput";
import { AccountUpdateWithoutOwnedTakerApprovalsInput } from "../inputs/AccountUpdateWithoutOwnedTakerApprovalsInput";

@TypeGraphQL.InputType("AccountUpsertWithoutOwnedTakerApprovalsInput", {
  isAbstract: true
})
export class AccountUpsertWithoutOwnedTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutOwnedTakerApprovalsInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutOwnedTakerApprovalsInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutOwnedTakerApprovalsInput, {
    nullable: false
  })
  create!: AccountCreateWithoutOwnedTakerApprovalsInput;
}
