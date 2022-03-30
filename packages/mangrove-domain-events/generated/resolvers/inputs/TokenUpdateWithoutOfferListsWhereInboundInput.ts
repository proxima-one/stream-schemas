import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainUpdateOneRequiredWithoutTokensInput } from "../inputs/ChainUpdateOneRequiredWithoutTokensInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OfferListUpdateManyWithoutOutboundTokenInput } from "../inputs/OfferListUpdateManyWithoutOutboundTokenInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TokenUpdateWithoutOfferListsWhereInboundInput", {
  isAbstract: true
})
export class TokenUpdateWithoutOfferListsWhereInboundInput {
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

  @TypeGraphQL.Field(_type => ChainUpdateOneRequiredWithoutTokensInput, {
    nullable: true
  })
  chain?: ChainUpdateOneRequiredWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateManyWithoutOutboundTokenInput, {
    nullable: true
  })
  offerListsWhereOutbound?: OfferListUpdateManyWithoutOutboundTokenInput | undefined;
}
