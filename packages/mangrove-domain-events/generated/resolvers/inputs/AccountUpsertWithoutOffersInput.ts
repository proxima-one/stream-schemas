import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutOffersInput } from "../inputs/AccountCreateWithoutOffersInput";
import { AccountUpdateWithoutOffersInput } from "../inputs/AccountUpdateWithoutOffersInput";

@TypeGraphQL.InputType("AccountUpsertWithoutOffersInput", {
  isAbstract: true
})
export class AccountUpsertWithoutOffersInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutOffersInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutOffersInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutOffersInput, {
    nullable: false
  })
  create!: AccountCreateWithoutOffersInput;
}
