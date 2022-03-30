import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutOrdersInput } from "../inputs/AccountCreateWithoutOrdersInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class AccountCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: false
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: AccountCreateWithoutOrdersInput;
}
