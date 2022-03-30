import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutMakerBalancesInput } from "../inputs/AccountCreateOrConnectWithoutMakerBalancesInput";
import { AccountCreateWithoutMakerBalancesInput } from "../inputs/AccountCreateWithoutMakerBalancesInput";
import { AccountUpdateWithoutMakerBalancesInput } from "../inputs/AccountUpdateWithoutMakerBalancesInput";
import { AccountUpsertWithoutMakerBalancesInput } from "../inputs/AccountUpsertWithoutMakerBalancesInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneRequiredWithoutMakerBalancesInput", {
  isAbstract: true
})
export class AccountUpdateOneRequiredWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutMakerBalancesInput, {
    nullable: true
  })
  create?: AccountCreateWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutMakerBalancesInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutMakerBalancesInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutMakerBalancesInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutMakerBalancesInput | undefined;
}
