import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutOffersInput } from "../inputs/OfferListCreateWithoutOffersInput";
import { OfferListUpdateWithoutOffersInput } from "../inputs/OfferListUpdateWithoutOffersInput";

@TypeGraphQL.InputType("OfferListUpsertWithoutOffersInput", {
  isAbstract: true
})
export class OfferListUpsertWithoutOffersInput {
  @TypeGraphQL.Field(_type => OfferListUpdateWithoutOffersInput, {
    nullable: false
  })
  update!: OfferListUpdateWithoutOffersInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutOffersInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutOffersInput;
}
