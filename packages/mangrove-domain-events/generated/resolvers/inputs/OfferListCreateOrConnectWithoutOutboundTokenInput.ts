import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutOutboundTokenInput } from "../inputs/OfferListCreateWithoutOutboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateOrConnectWithoutOutboundTokenInput", {
  isAbstract: true
})
export class OfferListCreateOrConnectWithoutOutboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutOutboundTokenInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutOutboundTokenInput;
}
