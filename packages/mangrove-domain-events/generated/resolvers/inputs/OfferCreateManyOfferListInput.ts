import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OfferCreateManyOfferListInput", {
  isAbstract: true
})
export class OfferCreateManyOfferListInput {
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
  mangroveId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  makerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prevOfferId?: string | undefined;

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
  takerPaysPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice?: number | undefined;

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
}
