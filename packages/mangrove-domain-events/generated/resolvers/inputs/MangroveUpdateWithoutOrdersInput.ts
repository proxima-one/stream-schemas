import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainUpdateOneRequiredWithoutMangrovesInput } from "../inputs/ChainUpdateOneRequiredWithoutMangrovesInput";
import { MakerBalanceUpdateManyWithoutMangroveInput } from "../inputs/MakerBalanceUpdateManyWithoutMangroveInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OfferListUpdateManyWithoutMangroveInput } from "../inputs/OfferListUpdateManyWithoutMangroveInput";
import { OfferUpdateManyWithoutMangroveInput } from "../inputs/OfferUpdateManyWithoutMangroveInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TakerApprovalUpdateManyWithoutMangroveInput } from "../inputs/TakerApprovalUpdateManyWithoutMangroveInput";

@TypeGraphQL.InputType("MangroveUpdateWithoutOrdersInput", {
  isAbstract: true
})
export class MangroveUpdateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  governance?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  monitor?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  vault?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  useOracle?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  notify?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  gasmax?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  gasprice?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  dead?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateOneRequiredWithoutMangrovesInput, {
    nullable: true
  })
  chain?: ChainUpdateOneRequiredWithoutMangrovesInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateManyWithoutMangroveInput, {
    nullable: true
  })
  offerLists?: OfferListUpdateManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => OfferUpdateManyWithoutMangroveInput, {
    nullable: true
  })
  offers?: OfferUpdateManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateManyWithoutMangroveInput, {
    nullable: true
  })
  makerBalances?: MakerBalanceUpdateManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyWithoutMangroveInput, {
    nullable: true
  })
  takerApprovals?: TakerApprovalUpdateManyWithoutMangroveInput | undefined;
}
