import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateOneRequiredWithoutOrdersInput } from "../inputs/AccountUpdateOneRequiredWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MangroveUpdateOneRequiredWithoutOrdersInput } from "../inputs/MangroveUpdateOneRequiredWithoutOrdersInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { OfferListUpdateOneRequiredWithoutOrdersInput } from "../inputs/OfferListUpdateOneRequiredWithoutOrdersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TakenOfferUpdateManyWithoutOrderInput } from "../inputs/TakenOfferUpdateManyWithoutOrderInput";

@TypeGraphQL.InputType("OrderUpdateInput", {
  isAbstract: true
})
export class OrderUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  blockNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  time?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  takerGot?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  takerGotNumber?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  takerGave?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  takerGaveNumber?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  takerPaidPrice?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  makerPaidPrice?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  penalty?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferUpdateManyWithoutOrderInput, {
    nullable: true
  })
  takenOffers?: TakenOfferUpdateManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  mangrove?: MangroveUpdateOneRequiredWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  offerList?: OfferListUpdateOneRequiredWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  taker?: AccountUpdateOneRequiredWithoutOrdersInput | undefined;
}
