import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderAvgOrderByAggregateInput } from "../inputs/OrderAvgOrderByAggregateInput";
import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
import { OrderSumOrderByAggregateInput } from "../inputs/OrderSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderOrderByWithAggregationInput", {
  isAbstract: true
})
export class OrderOrderByWithAggregationInput {
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
  mangroveId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  offerListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerGot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerGotNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerGave?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerGaveNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  takerPaidPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  makerPaidPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  penalty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrderAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrderMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrderSumOrderByAggregateInput | undefined;
}
