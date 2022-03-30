import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateNestedManyWithoutMakerInput } from "../inputs/MakerBalanceCreateNestedManyWithoutMakerInput";
import { OfferCreateNestedManyWithoutMakerInput } from "../inputs/OfferCreateNestedManyWithoutMakerInput";
import { OrderCreateNestedManyWithoutTakerInput } from "../inputs/OrderCreateNestedManyWithoutTakerInput";
import { TakerApprovalCreateNestedManyWithoutOwnerInput } from "../inputs/TakerApprovalCreateNestedManyWithoutOwnerInput";

@TypeGraphQL.InputType("AccountCreateWithoutSpenderTakerApprovalsInput", {
  isAbstract: true
})
export class AccountCreateWithoutSpenderTakerApprovalsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => TakerApprovalCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownedTakerApprovals?: TakerApprovalCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => OfferCreateNestedManyWithoutMakerInput, {
    nullable: true
  })
  offers?: OfferCreateNestedManyWithoutMakerInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutTakerInput, {
    nullable: true
  })
  orders?: OrderCreateNestedManyWithoutTakerInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCreateNestedManyWithoutMakerInput, {
    nullable: true
  })
  makerBalances?: MakerBalanceCreateNestedManyWithoutMakerInput | undefined;
}
