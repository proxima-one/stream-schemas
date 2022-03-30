import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateNestedManyWithoutInboundTokenInput } from "../inputs/OfferListCreateNestedManyWithoutInboundTokenInput";
import { OfferListCreateNestedManyWithoutOutboundTokenInput } from "../inputs/OfferListCreateNestedManyWithoutOutboundTokenInput";

@TypeGraphQL.InputType("TokenCreateWithoutChainInput", {
  isAbstract: true
})
export class TokenCreateWithoutChainInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  symbol!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  decimals!: number;

  @TypeGraphQL.Field(_type => OfferListCreateNestedManyWithoutInboundTokenInput, {
    nullable: true
  })
  offerListsWhereInbound?: OfferListCreateNestedManyWithoutInboundTokenInput | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateNestedManyWithoutOutboundTokenInput, {
    nullable: true
  })
  offerListsWhereOutbound?: OfferListCreateNestedManyWithoutOutboundTokenInput | undefined;
}
