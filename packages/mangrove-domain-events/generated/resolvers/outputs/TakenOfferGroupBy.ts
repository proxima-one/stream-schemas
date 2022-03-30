import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferAvgAggregate } from "../outputs/TakenOfferAvgAggregate";
import { TakenOfferCountAggregate } from "../outputs/TakenOfferCountAggregate";
import { TakenOfferMaxAggregate } from "../outputs/TakenOfferMaxAggregate";
import { TakenOfferMinAggregate } from "../outputs/TakenOfferMinAggregate";
import { TakenOfferSumAggregate } from "../outputs/TakenOfferSumAggregate";

@TypeGraphQL.ObjectType("TakenOfferGroupBy", {
  isAbstract: true
})
export class TakenOfferGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerWants!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerWantsNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerGives!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerGivesNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  posthookFailed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  failReason!: string | null;

  @TypeGraphQL.Field(_type => TakenOfferCountAggregate, {
    nullable: true
  })
  _count!: TakenOfferCountAggregate | null;

  @TypeGraphQL.Field(_type => TakenOfferAvgAggregate, {
    nullable: true
  })
  _avg!: TakenOfferAvgAggregate | null;

  @TypeGraphQL.Field(_type => TakenOfferSumAggregate, {
    nullable: true
  })
  _sum!: TakenOfferSumAggregate | null;

  @TypeGraphQL.Field(_type => TakenOfferMinAggregate, {
    nullable: true
  })
  _min!: TakenOfferMinAggregate | null;

  @TypeGraphQL.Field(_type => TakenOfferMaxAggregate, {
    nullable: true
  })
  _max!: TakenOfferMaxAggregate | null;
}
