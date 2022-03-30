import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListOrderByWithAggregationInput } from "../../../inputs/OfferListOrderByWithAggregationInput";
import { OfferListScalarWhereWithAggregatesInput } from "../../../inputs/OfferListScalarWhereWithAggregatesInput";
import { OfferListWhereInput } from "../../../inputs/OfferListWhereInput";
import { OfferListScalarFieldEnum } from "../../../../enums/OfferListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  where?: OfferListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfferListOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OfferListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "mangroveId" | "inboundTokenId" | "outboundTokenId" | "active" | "fee" | "gasbase" | "density">;

  @TypeGraphQL.Field(_type => OfferListScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OfferListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
