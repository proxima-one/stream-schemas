import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OfferListScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OfferListScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OfferListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OfferListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OfferListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OfferListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mangroveId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  inboundTokenId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  outboundTokenId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  active?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  fee?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  gasbase?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  density?: StringNullableWithAggregatesFilter | undefined;
}
