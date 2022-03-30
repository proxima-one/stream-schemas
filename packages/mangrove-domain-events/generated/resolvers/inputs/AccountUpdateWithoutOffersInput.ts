import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceUpdateManyWithoutMakerInput } from "../inputs/MakerBalanceUpdateManyWithoutMakerInput";
import { OrderUpdateManyWithoutTakerInput } from "../inputs/OrderUpdateManyWithoutTakerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TakerApprovalUpdateManyWithoutOwnerInput } from "../inputs/TakerApprovalUpdateManyWithoutOwnerInput";
import { TakerApprovalUpdateManyWithoutSpenderInput } from "../inputs/TakerApprovalUpdateManyWithoutSpenderInput";

@TypeGraphQL.InputType("AccountUpdateWithoutOffersInput", {
  isAbstract: true
})
export class AccountUpdateWithoutOffersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  ownedTakerApprovals?: TakerApprovalUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyWithoutSpenderInput, {
    nullable: true
  })
  spenderTakerApprovals?: TakerApprovalUpdateManyWithoutSpenderInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutTakerInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutTakerInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateManyWithoutMakerInput, {
    nullable: true
  })
  makerBalances?: MakerBalanceUpdateManyWithoutMakerInput | undefined;
}
