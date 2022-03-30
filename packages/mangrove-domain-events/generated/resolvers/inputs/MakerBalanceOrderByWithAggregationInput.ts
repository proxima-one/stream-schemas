import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCountOrderByAggregateInput } from "../inputs/MakerBalanceCountOrderByAggregateInput";
import { MakerBalanceMaxOrderByAggregateInput } from "../inputs/MakerBalanceMaxOrderByAggregateInput";
import { MakerBalanceMinOrderByAggregateInput } from "../inputs/MakerBalanceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MakerBalanceOrderByWithAggregationInput", {
  isAbstract: true
})
export class MakerBalanceOrderByWithAggregationInput {
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
  makerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  balance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MakerBalanceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MakerBalanceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MakerBalanceMinOrderByAggregateInput | undefined;
}
