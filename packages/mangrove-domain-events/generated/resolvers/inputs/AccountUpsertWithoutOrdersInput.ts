import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutOrdersInput } from "../inputs/AccountCreateWithoutOrdersInput";
import { AccountUpdateWithoutOrdersInput } from "../inputs/AccountUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("AccountUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class AccountUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: AccountCreateWithoutOrdersInput;
}
