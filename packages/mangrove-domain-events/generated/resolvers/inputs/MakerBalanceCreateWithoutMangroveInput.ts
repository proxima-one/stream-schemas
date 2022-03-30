import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutMakerBalancesInput } from "../inputs/AccountCreateNestedOneWithoutMakerBalancesInput";

@TypeGraphQL.InputType("MakerBalanceCreateWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceCreateWithoutMangroveInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  balance!: string;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutMakerBalancesInput, {
    nullable: false
  })
  maker!: AccountCreateNestedOneWithoutMakerBalancesInput;
}
