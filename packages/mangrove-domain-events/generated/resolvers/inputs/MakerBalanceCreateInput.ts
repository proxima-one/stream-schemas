import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutMakerBalancesInput } from "../inputs/AccountCreateNestedOneWithoutMakerBalancesInput";
import { MangroveCreateNestedOneWithoutMakerBalancesInput } from "../inputs/MangroveCreateNestedOneWithoutMakerBalancesInput";

@TypeGraphQL.InputType("MakerBalanceCreateInput", {
  isAbstract: true
})
export class MakerBalanceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  balance!: string;

  @TypeGraphQL.Field(_type => MangroveCreateNestedOneWithoutMakerBalancesInput, {
    nullable: false
  })
  mangrove!: MangroveCreateNestedOneWithoutMakerBalancesInput;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutMakerBalancesInput, {
    nullable: false
  })
  maker!: AccountCreateNestedOneWithoutMakerBalancesInput;
}
