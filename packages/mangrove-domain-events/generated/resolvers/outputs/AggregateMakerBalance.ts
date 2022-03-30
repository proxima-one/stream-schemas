import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCountAggregate } from "../outputs/MakerBalanceCountAggregate";
import { MakerBalanceMaxAggregate } from "../outputs/MakerBalanceMaxAggregate";
import { MakerBalanceMinAggregate } from "../outputs/MakerBalanceMinAggregate";

@TypeGraphQL.ObjectType("AggregateMakerBalance", {
  isAbstract: true
})
export class AggregateMakerBalance {
  @TypeGraphQL.Field(_type => MakerBalanceCountAggregate, {
    nullable: true
  })
  _count!: MakerBalanceCountAggregate | null;

  @TypeGraphQL.Field(_type => MakerBalanceMinAggregate, {
    nullable: true
  })
  _min!: MakerBalanceMinAggregate | null;

  @TypeGraphQL.Field(_type => MakerBalanceMaxAggregate, {
    nullable: true
  })
  _max!: MakerBalanceMaxAggregate | null;
}
