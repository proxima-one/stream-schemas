import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListAvgOrderByAggregateInput } from "../inputs/OfferListAvgOrderByAggregateInput";
import { OfferListCountOrderByAggregateInput } from "../inputs/OfferListCountOrderByAggregateInput";
import { OfferListMaxOrderByAggregateInput } from "../inputs/OfferListMaxOrderByAggregateInput";
import { OfferListMinOrderByAggregateInput } from "../inputs/OfferListMinOrderByAggregateInput";
import { OfferListSumOrderByAggregateInput } from "../inputs/OfferListSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OfferListOrderByWithAggregationInput", {
  isAbstract: true
})
export class OfferListOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mangroveId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  inboundTokenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  outboundTokenId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fee?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gasbase?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  density?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OfferListCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OfferListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferListAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OfferListAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferListMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OfferListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferListMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OfferListMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferListSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OfferListSumOrderByAggregateInput | undefined;
}
