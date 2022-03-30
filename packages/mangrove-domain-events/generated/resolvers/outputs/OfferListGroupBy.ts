import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListAvgAggregate } from "../outputs/OfferListAvgAggregate";
import { OfferListCountAggregate } from "../outputs/OfferListCountAggregate";
import { OfferListMaxAggregate } from "../outputs/OfferListMaxAggregate";
import { OfferListMinAggregate } from "../outputs/OfferListMinAggregate";
import { OfferListSumAggregate } from "../outputs/OfferListSumAggregate";

@TypeGraphQL.ObjectType("OfferListGroupBy", {
  isAbstract: true
})
export class OfferListGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mangroveId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  inboundTokenId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  outboundTokenId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fee!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasbase!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  density!: string | null;

  @TypeGraphQL.Field(_type => OfferListCountAggregate, {
    nullable: true
  })
  _count!: OfferListCountAggregate | null;

  @TypeGraphQL.Field(_type => OfferListAvgAggregate, {
    nullable: true
  })
  _avg!: OfferListAvgAggregate | null;

  @TypeGraphQL.Field(_type => OfferListSumAggregate, {
    nullable: true
  })
  _sum!: OfferListSumAggregate | null;

  @TypeGraphQL.Field(_type => OfferListMinAggregate, {
    nullable: true
  })
  _min!: OfferListMinAggregate | null;

  @TypeGraphQL.Field(_type => OfferListMaxAggregate, {
    nullable: true
  })
  _max!: OfferListMaxAggregate | null;
}
