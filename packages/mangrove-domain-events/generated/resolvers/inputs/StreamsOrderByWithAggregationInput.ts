import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StreamsCountOrderByAggregateInput } from "../inputs/StreamsCountOrderByAggregateInput";
import { StreamsMaxOrderByAggregateInput } from "../inputs/StreamsMaxOrderByAggregateInput";
import { StreamsMinOrderByAggregateInput } from "../inputs/StreamsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StreamsOrderByWithAggregationInput", {
  isAbstract: true
})
export class StreamsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StreamsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StreamsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StreamsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StreamsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StreamsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StreamsMinOrderByAggregateInput | undefined;
}
