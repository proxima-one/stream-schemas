import * as TypeGraphQL from "type-graphql";

export enum OfferScalarFieldEnum {
  id = "id",
  blockNumber = "blockNumber",
  time = "time",
  offerListId = "offerListId",
  mangroveId = "mangroveId",
  makerId = "makerId",
  prevOfferId = "prevOfferId",
  wants = "wants",
  wantsNumber = "wantsNumber",
  gives = "gives",
  givesNumber = "givesNumber",
  takerPaysPrice = "takerPaysPrice",
  makerPaysPrice = "makerPaysPrice",
  gasprice = "gasprice",
  gasreq = "gasreq",
  live = "live",
  deprovisioned = "deprovisioned"
}
TypeGraphQL.registerEnumType(OfferScalarFieldEnum, {
  name: "OfferScalarFieldEnum",
  description: undefined,
});
