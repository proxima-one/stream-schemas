import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferAvgOrderByAggregateInput } from "../inputs/OfferAvgOrderByAggregateInput";
import { OfferCountOrderByAggregateInput } from "../inputs/OfferCountOrderByAggregateInput";
import { OfferMaxOrderByAggregateInput } from "../inputs/OfferMaxOrderByAggregateInput";
import { OfferMinOrderByAggregateInput } from "../inputs/OfferMinOrderByAggregateInput";
import { OfferSumOrderByAggregateInput } from "../inputs/OfferSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OfferOrderByWithAggregationInput", {
  isAbstract: true
})
export class OfferOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  blockNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  offerListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mangroveId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  makerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prevOfferId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wants?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wantsNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gives?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  givesNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerPaysPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  makerPaysPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gasprice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gasreq?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  live?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deprovisioned?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OfferCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OfferCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OfferAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OfferMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OfferMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OfferSumOrderByAggregateInput | undefined;
}
