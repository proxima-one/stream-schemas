import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListUpdateWithoutInboundTokenInput } from "../inputs/OfferListUpdateWithoutInboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateWithWhereUniqueWithoutInboundTokenInput", {
  isAbstract: true
})
export class OfferListUpdateWithWhereUniqueWithoutInboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutInboundTokenInput, {
    nullable: false
  })
  data!: OfferListUpdateWithoutInboundTokenInput;
}
