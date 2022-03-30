import * as TypeGraphQL from "type-graphql";

export enum OfferListScalarFieldEnum {
  id = "id",
  mangroveId = "mangroveId",
  inboundTokenId = "inboundTokenId",
  outboundTokenId = "outboundTokenId",
  active = "active",
  fee = "fee",
  gasbase = "gasbase",
  density = "density"
}
TypeGraphQL.registerEnumType(OfferListScalarFieldEnum, {
  name: "OfferListScalarFieldEnum",
  description: undefined,
});
