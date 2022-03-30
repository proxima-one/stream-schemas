import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsCreateManyInput } from "../../../inputs/StreamsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStreamsArgs {
  @TypeGraphQL.Field(_type => [StreamsCreateManyInput], {
    nullable: false
  })
  data!: StreamsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
