import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferOrderByWithRelationInput } from "../../../inputs/OfferOrderByWithRelationInput";
import { OfferWhereInput } from "../../../inputs/OfferWhereInput";
import { OfferWhereUniqueInput } from "../../../inputs/OfferWhereUniqueInput";
import { OfferScalarFieldEnum } from "../../../../enums/OfferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOfferArgs {
  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  where?: OfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfferOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OfferOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfferWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OfferScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "blockNumber" | "time" | "offerListId" | "mangroveId" | "makerId" | "prevOfferId" | "wants" | "wantsNumber" | "gives" | "givesNumber" | "takerPaysPrice" | "makerPaysPrice" | "gasprice" | "gasreq" | "live" | "deprovisioned"> | undefined;
}
