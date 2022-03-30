import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsWhereUniqueInput } from "../../../inputs/StreamsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsWhereUniqueInput, {
    nullable: false
  })
  where!: StreamsWhereUniqueInput;
}
