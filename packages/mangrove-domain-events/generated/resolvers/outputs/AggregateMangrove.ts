import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveAvgAggregate } from "../outputs/MangroveAvgAggregate";
import { MangroveCountAggregate } from "../outputs/MangroveCountAggregate";
import { MangroveMaxAggregate } from "../outputs/MangroveMaxAggregate";
import { MangroveMinAggregate } from "../outputs/MangroveMinAggregate";
import { MangroveSumAggregate } from "../outputs/MangroveSumAggregate";

@TypeGraphQL.ObjectType("AggregateMangrove", {
  isAbstract: true
})
export class AggregateMangrove {
  @TypeGraphQL.Field(_type => MangroveCountAggregate, {
    nullable: true
  })
  _count!: MangroveCountAggregate | null;

  @TypeGraphQL.Field(_type => MangroveAvgAggregate, {
    nullable: true
  })
  _avg!: MangroveAvgAggregate | null;

  @TypeGraphQL.Field(_type => MangroveSumAggregate, {
    nullable: true
  })
  _sum!: MangroveSumAggregate | null;

  @TypeGraphQL.Field(_type => MangroveMinAggregate, {
    nullable: true
  })
  _min!: MangroveMinAggregate | null;

  @TypeGraphQL.Field(_type => MangroveMaxAggregate, {
    nullable: true
  })
  _max!: MangroveMaxAggregate | null;
}
