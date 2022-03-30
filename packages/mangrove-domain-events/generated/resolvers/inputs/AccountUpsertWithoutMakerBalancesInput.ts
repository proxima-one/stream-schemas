import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutMakerBalancesInput } from "../inputs/AccountCreateWithoutMakerBalancesInput";
import { AccountUpdateWithoutMakerBalancesInput } from "../inputs/AccountUpdateWithoutMakerBalancesInput";

@TypeGraphQL.InputType("AccountUpsertWithoutMakerBalancesInput", {
  isAbstract: true
})
export class AccountUpsertWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutMakerBalancesInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutMakerBalancesInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutMakerBalancesInput, {
    nullable: false
  })
  create!: AccountCreateWithoutMakerBalancesInput;
}
