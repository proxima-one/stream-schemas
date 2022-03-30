import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MangroveRelationFilter } from "../inputs/MangroveRelationFilter";
import { OfferListRelationFilter } from "../inputs/OfferListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TakerApprovalListRelationFilter } from "../inputs/TakerApprovalListRelationFilter";
import { TokenRelationFilter } from "../inputs/TokenRelationFilter";

@TypeGraphQL.InputType("OfferListWhereInput", {
  isAbstract: true
})
export class OfferListWhereInput {
  @TypeGraphQL.Field(_type => [OfferListWhereInput], {
    nullable: true
  })
  AND?: OfferListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereInput], {
    nullable: true
  })
  OR?: OfferListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereInput], {
    nullable: true
  })
  NOT?: OfferListWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => MangroveRelationFilter, {
    nullable: true
  })
  mangrove?: MangroveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TokenRelationFilter, {
    nullable: true
  })
  inboundToken?: TokenRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TokenRelationFilter, {
    nullable: true
  })
  outboundToken?: TokenRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListRelationFilter, {
    nullable: true
  })
  offers?: OfferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalListRelationFilter, {
    nullable: true
  })
  takerApprovals?: TakerApprovalListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  orders?: OrderListRelationFilter | undefined;
}
