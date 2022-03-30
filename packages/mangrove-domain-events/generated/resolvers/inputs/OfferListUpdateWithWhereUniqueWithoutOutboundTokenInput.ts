import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListUpdateWithoutOutboundTokenInput } from "../inputs/OfferListUpdateWithoutOutboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput", {
  isAbstract: true
})
export class OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutOutboundTokenInput, {
    nullable: false
  })
  data!: OfferListUpdateWithoutOutboundTokenInput;
}
