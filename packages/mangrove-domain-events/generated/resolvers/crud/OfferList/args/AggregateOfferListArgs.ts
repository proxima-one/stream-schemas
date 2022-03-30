import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListOrderByWithRelationInput } from "../../../inputs/OfferListOrderByWithRelationInput";
import { OfferListWhereInput } from "../../../inputs/OfferListWhereInput";
import { OfferListWhereUniqueInput } from "../../../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOfferListArgs {
  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  where?: OfferListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfferListOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OfferListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfferListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
