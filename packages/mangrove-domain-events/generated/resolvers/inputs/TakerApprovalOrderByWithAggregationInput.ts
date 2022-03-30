import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCountOrderByAggregateInput } from "../inputs/TakerApprovalCountOrderByAggregateInput";
import { TakerApprovalMaxOrderByAggregateInput } from "../inputs/TakerApprovalMaxOrderByAggregateInput";
import { TakerApprovalMinOrderByAggregateInput } from "../inputs/TakerApprovalMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TakerApprovalOrderByWithAggregationInput", {
  isAbstract: true
})
export class TakerApprovalOrderByWithAggregationInput {
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
  offerListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  spenderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TakerApprovalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TakerApprovalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TakerApprovalMinOrderByAggregateInput | undefined;
}
