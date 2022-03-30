import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakenOfferCreateManyInput } from "../../../inputs/TakenOfferCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTakenOfferArgs {
  @TypeGraphQL.Field(_type => [TakenOfferCreateManyInput], {
    nullable: false
  })
  data!: TakenOfferCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
