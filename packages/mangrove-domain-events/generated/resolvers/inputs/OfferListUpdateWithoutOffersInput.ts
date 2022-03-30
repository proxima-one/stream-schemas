import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveUpdateOneRequiredWithoutOfferListsInput } from "../inputs/MangroveUpdateOneRequiredWithoutOfferListsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutOfferListInput } from "../inputs/OrderUpdateManyWithoutOfferListInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TakerApprovalUpdateManyWithoutOfferListInput } from "../inputs/TakerApprovalUpdateManyWithoutOfferListInput";
import { TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput } from "../inputs/TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput";
import { TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput } from "../inputs/TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput";

@TypeGraphQL.InputType("OfferListUpdateWithoutOffersInput", {
  isAbstract: true
})
export class OfferListUpdateWithoutOffersInput {
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

  @TypeGraphQL.Field(_type => MangroveUpdateOneRequiredWithoutOfferListsInput, {
    nullable: true
  })
  mangrove?: MangroveUpdateOneRequiredWithoutOfferListsInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput, {
    nullable: true
  })
  inboundToken?: TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  outboundToken?: TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyWithoutOfferListInput, {
    nullable: true
  })
  takerApprovals?: TakerApprovalUpdateManyWithoutOfferListInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutOfferListInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutOfferListInput | undefined;
}
