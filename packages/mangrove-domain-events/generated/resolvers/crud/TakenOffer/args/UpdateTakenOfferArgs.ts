import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferUpdateInput } from "../../../inputs/TakenOfferUpdateInput";
import { TakenOfferWhereUniqueInput } from "../../../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferUpdateInput, {
    nullable: false
  })
  data!: TakenOfferUpdateInput;

  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: false
  })
  where!: TakenOfferWhereUniqueInput;
}
