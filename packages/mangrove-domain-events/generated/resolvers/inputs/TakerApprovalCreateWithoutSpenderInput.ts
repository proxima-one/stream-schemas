import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateNestedOneWithoutOwnedTakerApprovalsInput";
import { MangroveCreateNestedOneWithoutTakerApprovalsInput } from "../inputs/MangroveCreateNestedOneWithoutTakerApprovalsInput";
import { OfferListCreateNestedOneWithoutTakerApprovalsInput } from "../inputs/OfferListCreateNestedOneWithoutTakerApprovalsInput";

@TypeGraphQL.InputType("TakerApprovalCreateWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalCreateWithoutSpenderInput {
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

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutOwnedTakerApprovalsInput, {
    nullable: false
  })
  owner!: AccountCreateNestedOneWithoutOwnedTakerApprovalsInput;
}
