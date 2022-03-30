import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByWithRelationInput } from "../inputs/AccountOrderByWithRelationInput";
import { MangroveOrderByWithRelationInput } from "../inputs/MangroveOrderByWithRelationInput";
import { OfferListOrderByWithRelationInput } from "../inputs/OfferListOrderByWithRelationInput";
import { TakenOfferOrderByRelationAggregateInput } from "../inputs/TakenOfferOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderOrderByWithRelationInput", {
  isAbstract: true
})
export class OrderOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => TakenOfferOrderByRelationAggregateInput, {
    nullable: true
  })
  takenOffers?: TakenOfferOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MangroveOrderByWithRelationInput, {
    nullable: true
  })
  mangrove?: MangroveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => OfferListOrderByWithRelationInput, {
    nullable: true
  })
  offerList?: OfferListOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByWithRelationInput, {
    nullable: true
  })
  taker?: AccountOrderByWithRelationInput | undefined;
}
