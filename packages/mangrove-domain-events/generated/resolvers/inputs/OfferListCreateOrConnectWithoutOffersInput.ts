import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutOffersInput } from "../inputs/OfferListCreateWithoutOffersInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateOrConnectWithoutOffersInput", {
  isAbstract: true
})
export class OfferListCreateOrConnectWithoutOffersInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutOffersInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutOffersInput;
}
