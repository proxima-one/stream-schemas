import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferCreateInput } from "../../../inputs/TakenOfferCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferCreateInput, {
    nullable: false
  })
  data!: TakenOfferCreateInput;
}
