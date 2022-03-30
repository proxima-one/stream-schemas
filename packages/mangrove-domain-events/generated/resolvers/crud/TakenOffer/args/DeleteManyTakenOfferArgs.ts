import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferWhereInput } from "../../../inputs/TakenOfferWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  where?: TakenOfferWhereInput | undefined;
}
