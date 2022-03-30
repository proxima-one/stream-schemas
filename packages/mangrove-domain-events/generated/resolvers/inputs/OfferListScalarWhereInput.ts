import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("OfferListScalarWhereInput", {
  isAbstract: true
})
export class OfferListScalarWhereInput {
  @TypeGraphQL.Field(_type => [OfferListScalarWhereInput], {
    nullable: true
  })
  AND?: OfferListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereInput], {
    nullable: true
  })
  OR?: OfferListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereInput], {
    nullable: true
  })
  NOT?: OfferListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mangroveId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  inboundTokenId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  outboundTokenId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  active?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  fee?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  gasbase?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  density?: StringNullableFilter | undefined;
}
