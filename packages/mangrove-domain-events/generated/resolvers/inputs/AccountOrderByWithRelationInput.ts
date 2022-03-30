import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceOrderByRelationAggregateInput } from "../inputs/MakerBalanceOrderByRelationAggregateInput";
import { OfferOrderByRelationAggregateInput } from "../inputs/OfferOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { TakerApprovalOrderByRelationAggregateInput } from "../inputs/TakerApprovalOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AccountOrderByWithRelationInput", {
  isAbstract: true
})
export class AccountOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalOrderByRelationAggregateInput, {
    nullable: true
  })
  ownedTakerApprovals?: TakerApprovalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalOrderByRelationAggregateInput, {
    nullable: true
  })
  spenderTakerApprovals?: TakerApprovalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferOrderByRelationAggregateInput, {
    nullable: true
  })
  offers?: OfferOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput, {
    nullable: true
  })
  orders?: OrderOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceOrderByRelationAggregateInput, {
    nullable: true
  })
  makerBalances?: MakerBalanceOrderByRelationAggregateInput | undefined;
}
