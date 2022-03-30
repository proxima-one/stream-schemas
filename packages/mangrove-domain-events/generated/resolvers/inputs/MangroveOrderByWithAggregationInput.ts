import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveAvgOrderByAggregateInput } from "../inputs/MangroveAvgOrderByAggregateInput";
import { MangroveCountOrderByAggregateInput } from "../inputs/MangroveCountOrderByAggregateInput";
import { MangroveMaxOrderByAggregateInput } from "../inputs/MangroveMaxOrderByAggregateInput";
import { MangroveMinOrderByAggregateInput } from "../inputs/MangroveMinOrderByAggregateInput";
import { MangroveSumOrderByAggregateInput } from "../inputs/MangroveSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MangroveOrderByWithAggregationInput", {
  isAbstract: true
})
export class MangroveOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chainId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  governance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  monitor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  vault?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  useOracle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notify?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gasmax?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gasprice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dead?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MangroveCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MangroveCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MangroveAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MangroveAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MangroveMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MangroveMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MangroveMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MangroveMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MangroveSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MangroveSumOrderByAggregateInput | undefined;
}
