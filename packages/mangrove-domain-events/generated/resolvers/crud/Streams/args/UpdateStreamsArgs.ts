import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsUpdateInput } from "../../../inputs/StreamsUpdateInput";
import { StreamsWhereUniqueInput } from "../../../inputs/StreamsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsUpdateInput, {
    nullable: false
  })
  data!: StreamsUpdateInput;

  @TypeGraphQL.Field(_type => StreamsWhereUniqueInput, {
    nullable: false
  })
  where!: StreamsWhereUniqueInput;
}
