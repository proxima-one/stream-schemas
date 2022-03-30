import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListUpdateManyMutationInput } from "../../../inputs/OfferListUpdateManyMutationInput";
import { OfferListWhereInput } from "../../../inputs/OfferListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfferListUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  where?: OfferListWhereInput | undefined;
}
