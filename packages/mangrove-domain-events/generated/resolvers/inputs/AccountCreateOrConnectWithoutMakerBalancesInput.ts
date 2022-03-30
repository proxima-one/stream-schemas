import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutMakerBalancesInput } from "../inputs/AccountCreateWithoutMakerBalancesInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutMakerBalancesInput", {
  isAbstract: true
})
export class AccountCreateOrConnectWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: false
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutMakerBalancesInput, {
    nullable: false
  })
  create!: AccountCreateWithoutMakerBalancesInput;
}
