import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainOrderByWithRelationInput } from "../inputs/ChainOrderByWithRelationInput";
import { OfferListOrderByRelationAggregateInput } from "../inputs/OfferListOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TokenOrderByWithRelationInput", {
  isAbstract: true
})
export class TokenOrderByWithRelationInput {
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
  symbol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  decimals?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChainOrderByWithRelationInput, {
    nullable: true
  })
  chain?: ChainOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => OfferListOrderByRelationAggregateInput, {
    nullable: true
  })
  offerListsWhereInbound?: OfferListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OfferListOrderByRelationAggregateInput, {
    nullable: true
  })
  offerListsWhereOutbound?: OfferListOrderByRelationAggregateInput | undefined;
}
