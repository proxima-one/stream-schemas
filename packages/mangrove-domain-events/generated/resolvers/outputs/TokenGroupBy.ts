import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenAvgAggregate } from "../outputs/TokenAvgAggregate";
import { TokenCountAggregate } from "../outputs/TokenCountAggregate";
import { TokenMaxAggregate } from "../outputs/TokenMaxAggregate";
import { TokenMinAggregate } from "../outputs/TokenMinAggregate";
import { TokenSumAggregate } from "../outputs/TokenSumAggregate";

@TypeGraphQL.ObjectType("TokenGroupBy", {
  isAbstract: true
})
export class TokenGroupBy {
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
  symbol!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  decimals!: number;

  @TypeGraphQL.Field(_type => TokenCountAggregate, {
    nullable: true
  })
  _count!: TokenCountAggregate | null;

  @TypeGraphQL.Field(_type => TokenAvgAggregate, {
    nullable: true
  })
  _avg!: TokenAvgAggregate | null;

  @TypeGraphQL.Field(_type => TokenSumAggregate, {
    nullable: true
  })
  _sum!: TokenSumAggregate | null;

  @TypeGraphQL.Field(_type => TokenMinAggregate, {
    nullable: true
  })
  _min!: TokenMinAggregate | null;

  @TypeGraphQL.Field(_type => TokenMaxAggregate, {
    nullable: true
  })
  _max!: TokenMaxAggregate | null;
}
