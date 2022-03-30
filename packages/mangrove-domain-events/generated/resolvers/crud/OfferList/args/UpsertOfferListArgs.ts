import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListCreateInput } from "../../../inputs/OfferListCreateInput";
import { OfferListUpdateInput } from "../../../inputs/OfferListUpdateInput";
import { OfferListWhereUniqueInput } from "../../../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateInput, {
    nullable: false
  })
  create!: OfferListCreateInput;

  @TypeGraphQL.Field(_type => OfferListUpdateInput, {
    nullable: false
  })
  update!: OfferListUpdateInput;
}
