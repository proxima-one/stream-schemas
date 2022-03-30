import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutInboundTokenInput } from "../inputs/OfferListCreateWithoutInboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateOrConnectWithoutInboundTokenInput", {
  isAbstract: true
})
export class OfferListCreateOrConnectWithoutInboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutInboundTokenInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutInboundTokenInput;
}
