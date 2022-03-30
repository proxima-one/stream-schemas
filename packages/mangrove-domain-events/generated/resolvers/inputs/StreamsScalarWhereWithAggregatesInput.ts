import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StreamsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StreamsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StreamsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StreamsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StreamsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StreamsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StreamsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StreamsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  state?: StringWithAggregatesFilter | undefined;
}
