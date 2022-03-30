import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferUpdateManyMutationInput } from "../../../inputs/TakenOfferUpdateManyMutationInput";
import { TakenOfferWhereInput } from "../../../inputs/TakenOfferWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTakenOfferArgs {
  @TypeGraphQL.Field(_type => TakenOfferUpdateManyMutationInput, {
    nullable: false
  })
  data!: TakenOfferUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  where?: TakenOfferWhereInput | undefined;
}
