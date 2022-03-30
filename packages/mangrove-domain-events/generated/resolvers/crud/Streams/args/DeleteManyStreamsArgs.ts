import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsWhereInput } from "../../../inputs/StreamsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsWhereInput, {
    nullable: true
  })
  where?: StreamsWhereInput | undefined;
}
