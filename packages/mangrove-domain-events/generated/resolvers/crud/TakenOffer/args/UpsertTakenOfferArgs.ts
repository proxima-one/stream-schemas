import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferCreateInput } from "../../../inputs/TakenOfferCreateInput";
import { TakenOfferUpdateInput } from "../../../inputs/TakenOfferUpdateInput";
import { TakenOfferWhereUniqueInput } from "../../../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: false
  })
  where!: TakenOfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakenOfferCreateInput, {
    nullable: false
  })
  create!: TakenOfferCreateInput;

  @TypeGraphQL.Field(_type => TakenOfferUpdateInput, {
    nullable: false
  })
  update!: TakenOfferUpdateInput;
}
