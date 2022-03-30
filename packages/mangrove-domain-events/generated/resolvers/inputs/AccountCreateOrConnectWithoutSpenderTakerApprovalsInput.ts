import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutSpenderTakerApprovalsInput } from "../inputs/AccountCreateWithoutSpenderTakerApprovalsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutSpenderTakerApprovalsInput", {
  isAbstract: true
})
export class AccountCreateOrConnectWithoutSpenderTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: false
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutSpenderTakerApprovalsInput, {
    nullable: false
  })
  create!: AccountCreateWithoutSpenderTakerApprovalsInput;
}
