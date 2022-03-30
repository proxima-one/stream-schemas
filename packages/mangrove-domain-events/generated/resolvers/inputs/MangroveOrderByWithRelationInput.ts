import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainOrderByWithRelationInput } from "../inputs/ChainOrderByWithRelationInput";
import { MakerBalanceOrderByRelationAggregateInput } from "../inputs/MakerBalanceOrderByRelationAggregateInput";
import { OfferListOrderByRelationAggregateInput } from "../inputs/OfferListOrderByRelationAggregateInput";
import { OfferOrderByRelationAggregateInput } from "../inputs/OfferOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { TakerApprovalOrderByRelationAggregateInput } from "../inputs/TakerApprovalOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MangroveOrderByWithRelationInput", {
  isAbstract: true
})
export class MangroveOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ChainOrderByWithRelationInput, {
    nullable: true
  })
  chain?: ChainOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => OfferListOrderByRelationAggregateInput, {
    nullable: true
  })
  offerLists?: OfferListOrderByRelationAggregateInput | undefined;

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

  @TypeGraphQL.Field(_type => TakerApprovalOrderByRelationAggregateInput, {
    nullable: true
  })
  takerApprovals?: TakerApprovalOrderByRelationAggregateInput | undefined;
}
