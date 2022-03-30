import * as TypeGraphQL from "type-graphql";

export enum OrderScalarFieldEnum {
  id = "id",
  blockNumber = "blockNumber",
  time = "time",
  mangroveId = "mangroveId",
  offerListId = "offerListId",
  takerId = "takerId",
  takerGot = "takerGot",
  takerGotNumber = "takerGotNumber",
  takerGave = "takerGave",
  takerGaveNumber = "takerGaveNumber",
  takerPaidPrice = "takerPaidPrice",
  makerPaidPrice = "makerPaidPrice",
  penalty = "penalty"
}
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
  name: "OrderScalarFieldEnum",
  description: undefined,
});
