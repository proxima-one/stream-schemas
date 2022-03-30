import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListWhereInput } from "../../../inputs/OfferListWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  where?: OfferListWhereInput | undefined;
}
