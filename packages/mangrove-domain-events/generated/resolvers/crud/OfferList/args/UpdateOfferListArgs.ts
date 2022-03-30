import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListUpdateInput } from "../../../inputs/OfferListUpdateInput";
import { OfferListWhereUniqueInput } from "../../../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListUpdateInput, {
    nullable: false
  })
  data!: OfferListUpdateInput;

  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;
}
