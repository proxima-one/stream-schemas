import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferCreateInput } from "../../../inputs/OfferCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOfferArgs {
  @TypeGraphQL.Field(_type => OfferCreateInput, {
    nullable: false
  })
  data!: OfferCreateInput;
}
