import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { ChainRelationFilter } from "../inputs/ChainRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MakerBalanceListRelationFilter } from "../inputs/MakerBalanceListRelationFilter";
import { OfferListListRelationFilter } from "../inputs/OfferListListRelationFilter";
import { OfferListRelationFilter } from "../inputs/OfferListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TakerApprovalListRelationFilter } from "../inputs/TakerApprovalListRelationFilter";

@TypeGraphQL.InputType("MangroveWhereInput", {
  isAbstract: true
})
export class MangroveWhereInput {
  @TypeGraphQL.Field(_type => [MangroveWhereInput], {
    nullable: true
  })
  AND?: MangroveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereInput], {
    nullable: true
  })
  OR?: MangroveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereInput], {
    nullable: true
  })
  NOT?: MangroveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chainId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  governance?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  monitor?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  vault?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  useOracle?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  notify?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  gasmax?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  gasprice?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  dead?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ChainRelationFilter, {
    nullable: true
  })
  chain?: ChainRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListListRelationFilter, {
    nullable: true
  })
  offerLists?: OfferListListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListRelationFilter, {
    nullable: true
  })
  offers?: OfferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  orders?: OrderListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceListRelationFilter, {
    nullable: true
  })
  makerBalances?: MakerBalanceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalListRelationFilter, {
    nullable: true
  })
  takerApprovals?: TakerApprovalListRelationFilter | undefined;
}
