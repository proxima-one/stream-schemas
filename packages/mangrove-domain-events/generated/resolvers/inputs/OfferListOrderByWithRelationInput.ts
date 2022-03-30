import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveOrderByWithRelationInput } from "../inputs/MangroveOrderByWithRelationInput";
import { OfferOrderByRelationAggregateInput } from "../inputs/OfferOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { TakerApprovalOrderByRelationAggregateInput } from "../inputs/TakerApprovalOrderByRelationAggregateInput";
import { TokenOrderByWithRelationInput } from "../inputs/TokenOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OfferListOrderByWithRelationInput", {
  isAbstract: true
})
export class OfferListOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => MangroveOrderByWithRelationInput, {
    nullable: true
  })
  mangrove?: MangroveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TokenOrderByWithRelationInput, {
    nullable: true
  })
  inboundToken?: TokenOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TokenOrderByWithRelationInput, {
    nullable: true
  })
  outboundToken?: TokenOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => OfferOrderByRelationAggregateInput, {
    nullable: true
  })
  offers?: OfferOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalOrderByRelationAggregateInput, {
    nullable: true
  })
  takerApprovals?: TakerApprovalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput, {
    nullable: true
  })
  orders?: OrderOrderByRelationAggregateInput | undefined;
}
