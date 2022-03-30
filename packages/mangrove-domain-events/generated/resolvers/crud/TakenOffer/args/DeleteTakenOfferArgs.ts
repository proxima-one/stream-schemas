import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferWhereUniqueInput } from "../../../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: false
  })
  where!: TakenOfferWhereUniqueInput;
}
