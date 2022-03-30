import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutSpenderTakerApprovalsInput } from "../inputs/AccountCreateNestedOneWithoutSpenderTakerApprovalsInput";
import { MangroveCreateNestedOneWithoutTakerApprovalsInput } from "../inputs/MangroveCreateNestedOneWithoutTakerApprovalsInput";
import { OfferListCreateNestedOneWithoutTakerApprovalsInput } from "../inputs/OfferListCreateNestedOneWithoutTakerApprovalsInput";

@TypeGraphQL.InputType("TakerApprovalCreateWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalCreateWithoutOwnerInput {
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

  @TypeGraphQL.Field(_type => OfferListCreateNestedOneWithoutTakerApprovalsInput, {
    nullable: false
  })
  offerList!: OfferListCreateNestedOneWithoutTakerApprovalsInput;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutSpenderTakerApprovalsInput, {
    nullable: false
  })
  spender!: AccountCreateNestedOneWithoutSpenderTakerApprovalsInput;
}
