import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsOrderByWithRelationInput } from "../../../inputs/StreamsOrderByWithRelationInput";
import { StreamsWhereInput } from "../../../inputs/StreamsWhereInput";
import { StreamsWhereUniqueInput } from "../../../inputs/StreamsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsWhereInput, {
    nullable: true
  })
  where?: StreamsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StreamsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StreamsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StreamsWhereUniqueInput, {
    nullable: true
  })
  cursor?: StreamsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
