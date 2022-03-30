import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferOrderByWithRelationInput } from "../../../inputs/TakenOfferOrderByWithRelationInput";
import { TakenOfferWhereInput } from "../../../inputs/TakenOfferWhereInput";
import { TakenOfferWhereUniqueInput } from "../../../inputs/TakenOfferWhereUniqueInput";
import { TakenOfferScalarFieldEnum } from "../../../../enums/TakenOfferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  where?: TakenOfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TakenOfferOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: true
  })
  cursor?: TakenOfferWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "orderId" | "takerWants" | "takerWantsNumber" | "takerGives" | "takerGivesNumber" | "takerPaysPrice" | "makerPaysPrice" | "posthookFailed" | "failReason"> | undefined;
}
