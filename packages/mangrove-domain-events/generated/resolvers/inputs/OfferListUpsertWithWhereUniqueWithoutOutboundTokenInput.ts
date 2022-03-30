import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutOutboundTokenInput } from "../inputs/OfferListCreateWithoutOutboundTokenInput";
import { OfferListUpdateWithoutOutboundTokenInput } from "../inputs/OfferListUpdateWithoutOutboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput", {
  isAbstract: true
})
export class OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutOutboundTokenInput, {
    nullable: false
  })
  update!: OfferListUpdateWithoutOutboundTokenInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutOutboundTokenInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutOutboundTokenInput;
}
