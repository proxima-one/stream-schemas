import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsCreateInput } from "../../../inputs/StreamsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsCreateInput, {
    nullable: false
  })
  data!: StreamsCreateInput;
}
