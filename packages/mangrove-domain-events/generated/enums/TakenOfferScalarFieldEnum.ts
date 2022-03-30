import * as TypeGraphQL from "type-graphql";

export enum TakenOfferScalarFieldEnum {
  id = "id",
  orderId = "orderId",
  takerWants = "takerWants",
  takerWantsNumber = "takerWantsNumber",
  takerGives = "takerGives",
  takerGivesNumber = "takerGivesNumber",
  takerPaysPrice = "takerPaysPrice",
  makerPaysPrice = "makerPaysPrice",
  posthookFailed = "posthookFailed",
  failReason = "failReason"
}
TypeGraphQL.registerEnumType(TakenOfferScalarFieldEnum, {
  name: "TakenOfferScalarFieldEnum",
  description: undefined,
});
