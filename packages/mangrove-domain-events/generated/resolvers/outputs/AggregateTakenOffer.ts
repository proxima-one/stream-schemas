import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferAvgAggregate } from "../outputs/TakenOfferAvgAggregate";
import { TakenOfferCountAggregate } from "../outputs/TakenOfferCountAggregate";
import { TakenOfferMaxAggregate } from "../outputs/TakenOfferMaxAggregate";
import { TakenOfferMinAggregate } from "../outputs/TakenOfferMinAggregate";
import { TakenOfferSumAggregate } from "../outputs/TakenOfferSumAggregate";

@TypeGraphQL.ObjectType("AggregateTakenOffer", {
  isAbstract: true
})
export class AggregateTakenOffer {
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
