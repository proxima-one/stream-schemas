import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsUpdateManyMutationInput } from "../../../inputs/StreamsUpdateManyMutationInput";
import { StreamsWhereInput } from "../../../inputs/StreamsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsUpdateManyMutationInput, {
    nullable: false
  })
  data!: StreamsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StreamsWhereInput, {
    nullable: true
  })
  where?: StreamsWhereInput | undefined;
}
