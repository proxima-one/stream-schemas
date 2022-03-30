import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferAvgOrderByAggregateInput } from "../inputs/TakenOfferAvgOrderByAggregateInput";
import { TakenOfferCountOrderByAggregateInput } from "../inputs/TakenOfferCountOrderByAggregateInput";
import { TakenOfferMaxOrderByAggregateInput } from "../inputs/TakenOfferMaxOrderByAggregateInput";
import { TakenOfferMinOrderByAggregateInput } from "../inputs/TakenOfferMinOrderByAggregateInput";
import { TakenOfferSumOrderByAggregateInput } from "../inputs/TakenOfferSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TakenOfferOrderByWithAggregationInput", {
  isAbstract: true
})
export class TakenOfferOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerWants?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerWantsNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerGives?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerGivesNumber?: "asc" | "desc" | undefined;

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
  posthookFailed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  failReason?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TakenOfferCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TakenOfferCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TakenOfferAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TakenOfferMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TakenOfferMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TakenOfferSumOrderByAggregateInput | undefined;
}
