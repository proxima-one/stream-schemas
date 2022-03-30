import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListWhereUniqueInput } from "../../../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;
}
