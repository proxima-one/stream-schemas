import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutOffersInput } from "../inputs/AccountCreateOrConnectWithoutOffersInput";
import { AccountCreateWithoutOffersInput } from "../inputs/AccountCreateWithoutOffersInput";
import { AccountUpdateWithoutOffersInput } from "../inputs/AccountUpdateWithoutOffersInput";
import { AccountUpsertWithoutOffersInput } from "../inputs/AccountUpsertWithoutOffersInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneRequiredWithoutOffersInput", {
  isAbstract: true
})
export class AccountUpdateOneRequiredWithoutOffersInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutOffersInput, {
    nullable: true
  })
  create?: AccountCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutOffersInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutOffersInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutOffersInput | undefined;
}
