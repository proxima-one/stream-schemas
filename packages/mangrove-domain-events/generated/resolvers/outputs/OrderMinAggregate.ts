import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OrderMinAggregate", {
  isAbstract: true
})
export class OrderMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  blockNumber!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  time!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mangroveId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  offerListId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takerGot!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerGotNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takerGave!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerGaveNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaidPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaidPrice!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  penalty!: string | null;
}
