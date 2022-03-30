import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MangroveRelationFilter } from "../inputs/MangroveRelationFilter";
import { OfferListRelationFilter } from "../inputs/OfferListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TakenOfferListRelationFilter } from "../inputs/TakenOfferListRelationFilter";

@TypeGraphQL.InputType("OrderWhereInput", {
  isAbstract: true
})
export class OrderWhereInput {
  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  AND?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  OR?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  NOT?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  blockNumber?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mangroveId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  offerListId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  takerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  takerGot?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  takerGotNumber?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  takerGave?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  takerGaveNumber?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  takerPaidPrice?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  makerPaidPrice?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  penalty?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TakenOfferListRelationFilter, {
    nullable: true
  })
  takenOffers?: TakenOfferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MangroveRelationFilter, {
    nullable: true
  })
  mangrove?: MangroveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListRelationFilter, {
    nullable: true
  })
  offerList?: OfferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AccountRelationFilter, {
    nullable: true
  })
  taker?: AccountRelationFilter | undefined;
}
