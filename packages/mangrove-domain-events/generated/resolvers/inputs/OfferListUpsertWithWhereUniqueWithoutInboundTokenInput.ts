import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutInboundTokenInput } from "../inputs/OfferListCreateWithoutInboundTokenInput";
import { OfferListUpdateWithoutInboundTokenInput } from "../inputs/OfferListUpdateWithoutInboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpsertWithWhereUniqueWithoutInboundTokenInput", {
  isAbstract: true
})
export class OfferListUpsertWithWhereUniqueWithoutInboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutInboundTokenInput, {
    nullable: false
  })
  update!: OfferListUpdateWithoutInboundTokenInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutInboundTokenInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutInboundTokenInput;
}
