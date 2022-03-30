import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListCreateInput } from "../../../inputs/OfferListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListCreateInput, {
    nullable: false
  })
  data!: OfferListCreateInput;
}
