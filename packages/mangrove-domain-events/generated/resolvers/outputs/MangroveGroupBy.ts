import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveAvgAggregate } from "../outputs/MangroveAvgAggregate";
import { MangroveCountAggregate } from "../outputs/MangroveCountAggregate";
import { MangroveMaxAggregate } from "../outputs/MangroveMaxAggregate";
import { MangroveMinAggregate } from "../outputs/MangroveMinAggregate";
import { MangroveSumAggregate } from "../outputs/MangroveSumAggregate";

@TypeGraphQL.ObjectType("MangroveGroupBy", {
  isAbstract: true
})
export class MangroveGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  chainId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  governance!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  monitor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vault!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  useOracle!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  notify!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasmax!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasprice!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dead!: boolean | null;

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
