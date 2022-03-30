import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OfferMaxAggregate", {
  isAbstract: true
})
export class OfferMaxAggregate {
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
  offerListId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mangroveId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  makerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prevOfferId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  wants!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  wantsNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gives!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  givesNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasprice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasreq!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  live!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deprovisioned!: boolean | null;
}
