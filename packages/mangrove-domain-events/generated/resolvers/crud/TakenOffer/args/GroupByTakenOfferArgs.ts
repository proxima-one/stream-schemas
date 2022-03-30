import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferOrderByWithAggregationInput } from "../../../inputs/TakenOfferOrderByWithAggregationInput";
import { TakenOfferScalarWhereWithAggregatesInput } from "../../../inputs/TakenOfferScalarWhereWithAggregatesInput";
import { TakenOfferWhereInput } from "../../../inputs/TakenOfferWhereInput";
import { TakenOfferScalarFieldEnum } from "../../../../enums/TakenOfferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  where?: TakenOfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TakenOfferOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "orderId" | "takerWants" | "takerWantsNumber" | "takerGives" | "takerGivesNumber" | "takerPaysPrice" | "makerPaysPrice" | "posthookFailed" | "failReason">;

  @TypeGraphQL.Field(_type => TakenOfferScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TakenOfferScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
