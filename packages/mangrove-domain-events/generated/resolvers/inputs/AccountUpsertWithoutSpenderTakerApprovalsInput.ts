import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutSpenderTakerApprovalsInput } from "../inputs/AccountCreateWithoutSpenderTakerApprovalsInput";
import { AccountUpdateWithoutSpenderTakerApprovalsInput } from "../inputs/AccountUpdateWithoutSpenderTakerApprovalsInput";

@TypeGraphQL.InputType("AccountUpsertWithoutSpenderTakerApprovalsInput", {
  isAbstract: true
})
export class AccountUpsertWithoutSpenderTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutSpenderTakerApprovalsInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutSpenderTakerApprovalsInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutSpenderTakerApprovalsInput, {
    nullable: false
  })
  create!: AccountCreateWithoutSpenderTakerApprovalsInput;
}
