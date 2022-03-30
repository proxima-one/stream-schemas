import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutOffersInput } from "../inputs/AccountCreateOrConnectWithoutOffersInput";
import { AccountCreateWithoutOffersInput } from "../inputs/AccountCreateWithoutOffersInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedOneWithoutOffersInput", {
  isAbstract: true
})
export class AccountCreateNestedOneWithoutOffersInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutOffersInput, {
    nullable: true
  })
  create?: AccountCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
