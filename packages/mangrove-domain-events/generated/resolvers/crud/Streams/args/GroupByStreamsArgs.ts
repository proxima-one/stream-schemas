import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StreamsOrderByWithAggregationInput } from "../../../inputs/StreamsOrderByWithAggregationInput";
import { StreamsScalarWhereWithAggregatesInput } from "../../../inputs/StreamsScalarWhereWithAggregatesInput";
import { StreamsWhereInput } from "../../../inputs/StreamsWhereInput";
import { StreamsScalarFieldEnum } from "../../../../enums/StreamsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStreamsArgs {
  @TypeGraphQL.Field(_type => StreamsWhereInput, {
    nullable: true
  })
  where?: StreamsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StreamsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StreamsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StreamsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "state">;

  @TypeGraphQL.Field(_type => StreamsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StreamsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
