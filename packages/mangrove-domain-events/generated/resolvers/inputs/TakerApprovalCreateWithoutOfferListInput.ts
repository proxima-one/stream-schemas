import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateNestedOneWithoutOwnedTakerApprovalsInput";
import { AccountCreateNestedOneWithoutSpenderTakerApprovalsInput } from "../inputs/AccountCreateNestedOneWithoutSpenderTakerApprovalsInput";
import { MangroveCreateNestedOneWithoutTakerApprovalsInput } from "../inputs/MangroveCreateNestedOneWithoutTakerApprovalsInput";

@TypeGraphQL.InputType("TakerApprovalCreateWithoutOfferListInput", {
  isAbstract: true
})
export class TakerApprovalCreateWithoutOfferListInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => MangroveCreateNestedOneWithoutTakerApprovalsInput, {
    nullable: false
  })
  mangrove!: MangroveCreateNestedOneWithoutTakerApprovalsInput;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutOwnedTakerApprovalsInput, {
    nullable: false
  })
  owner!: AccountCreateNestedOneWithoutOwnedTakerApprovalsInput;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutSpenderTakerApprovalsInput, {
    nullable: false
  })
  spender!: AccountCreateNestedOneWithoutSpenderTakerApprovalsInput;
}
