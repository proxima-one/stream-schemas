import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutMakerBalancesInput } from "../inputs/AccountCreateOrConnectWithoutMakerBalancesInput";
import { AccountCreateWithoutMakerBalancesInput } from "../inputs/AccountCreateWithoutMakerBalancesInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedOneWithoutMakerBalancesInput", {
  isAbstract: true
})
export class AccountCreateNestedOneWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutMakerBalancesInput, {
    nullable: true
  })
  create?: AccountCreateWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutMakerBalancesInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
