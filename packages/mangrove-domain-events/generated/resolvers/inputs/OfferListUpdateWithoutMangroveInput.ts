import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OfferUpdateManyWithoutOfferListInput } from "../inputs/OfferUpdateManyWithoutOfferListInput";
import { OrderUpdateManyWithoutOfferListInput } from "../inputs/OrderUpdateManyWithoutOfferListInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TakerApprovalUpdateManyWithoutOfferListInput } from "../inputs/TakerApprovalUpdateManyWithoutOfferListInput";
import { TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput } from "../inputs/TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput";
import { TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput } from "../inputs/TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput";

@TypeGraphQL.InputType("OfferListUpdateWithoutMangroveInput", {
  isAbstract: true
})
export class OfferListUpdateWithoutMangroveInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  fee?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  gasbase?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  density?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput, {
    nullable: true
  })
  inboundToken?: TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  outboundToken?: TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => OfferUpdateManyWithoutOfferListInput, {
    nullable: true
  })
  offers?: OfferUpdateManyWithoutOfferListInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyWithoutOfferListInput, {
    nullable: true
  })
  takerApprovals?: TakerApprovalUpdateManyWithoutOfferListInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutOfferListInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutOfferListInput | undefined;
}
