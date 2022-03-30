import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferAvgAggregate } from "../outputs/OfferAvgAggregate";
import { OfferCountAggregate } from "../outputs/OfferCountAggregate";
import { OfferMaxAggregate } from "../outputs/OfferMaxAggregate";
import { OfferMinAggregate } from "../outputs/OfferMinAggregate";
import { OfferSumAggregate } from "../outputs/OfferSumAggregate";

@TypeGraphQL.ObjectType("OfferGroupBy", {
  isAbstract: true
})
export class OfferGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  blockNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  offerListId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mangroveId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  makerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prevOfferId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  wants!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  wantsNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  gives!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  givesNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gasprice!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gasreq!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  live!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deprovisioned!: boolean;

  @TypeGraphQL.Field(_type => OfferCountAggregate, {
    nullable: true
  })
  _count!: OfferCountAggregate | null;

  @TypeGraphQL.Field(_type => OfferAvgAggregate, {
    nullable: true
  })
  _avg!: OfferAvgAggregate | null;

  @TypeGraphQL.Field(_type => OfferSumAggregate, {
    nullable: true
  })
  _sum!: OfferSumAggregate | null;

  @TypeGraphQL.Field(_type => OfferMinAggregate, {
    nullable: true
  })
  _min!: OfferMinAggregate | null;

  @TypeGraphQL.Field(_type => OfferMaxAggregate, {
    nullable: true
  })
  _max!: OfferMaxAggregate | null;
}
