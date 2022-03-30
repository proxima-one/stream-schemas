import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OfferListUpdateManyWithoutInboundTokenInput } from "../inputs/OfferListUpdateManyWithoutInboundTokenInput";
import { OfferListUpdateManyWithoutOutboundTokenInput } from "../inputs/OfferListUpdateManyWithoutOutboundTokenInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TokenUpdateWithoutChainInput", {
  isAbstract: true
})
export class TokenUpdateWithoutChainInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  symbol?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  decimals?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateManyWithoutInboundTokenInput, {
    nullable: true
  })
  offerListsWhereInbound?: OfferListUpdateManyWithoutInboundTokenInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateManyWithoutOutboundTokenInput, {
    nullable: true
  })
  offerListsWhereOutbound?: OfferListUpdateManyWithoutOutboundTokenInput | undefined;
}
