import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsCreateInput } from "../../../inputs/StreamsCreateInput";
import { StreamsUpdateInput } from "../../../inputs/StreamsUpdateInput";
import { StreamsWhereUniqueInput } from "../../../inputs/StreamsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsWhereUniqueInput, {
    nullable: false
  })
  where!: StreamsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StreamsCreateInput, {
    nullable: false
  })
  create!: StreamsCreateInput;

  @TypeGraphQL.Field(_type => StreamsUpdateInput, {
    nullable: false
  })
  update!: StreamsUpdateInput;
}
