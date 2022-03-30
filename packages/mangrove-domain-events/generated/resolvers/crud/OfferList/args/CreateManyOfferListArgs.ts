import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferListCreateManyInput } from "../../../inputs/OfferListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOfferListArgs {
  @TypeGraphQL.Field(_type => [OfferListCreateManyInput], {
    nullable: false
  })
  data!: OfferListCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
