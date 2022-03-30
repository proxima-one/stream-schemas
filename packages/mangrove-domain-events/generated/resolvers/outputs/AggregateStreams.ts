import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StreamsCountAggregate } from "../outputs/StreamsCountAggregate";
import { StreamsMaxAggregate } from "../outputs/StreamsMaxAggregate";
import { StreamsMinAggregate } from "../outputs/StreamsMinAggregate";

@TypeGraphQL.ObjectType("AggregateStreams", {
  isAbstract: true
})
export class AggregateStreams {
  @TypeGraphQL.Field(_type => StreamsCountAggregate, {
    nullable: true
  })
  _count!: StreamsCountAggregate | null;

  @TypeGraphQL.Field(_type => StreamsMinAggregate, {
    nullable: true
  })
  _min!: StreamsMinAggregate | null;

  @TypeGraphQL.Field(_type => StreamsMaxAggregate, {
    nullable: true
  })
  _max!: StreamsMaxAggregate | null;
}
