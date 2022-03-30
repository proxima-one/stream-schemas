import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { Mangrove } from "../models/Mangrove";
import { OfferList } from "../models/OfferList";
import { TakenOffer } from "../models/TakenOffer";
import { OrderCount } from "../resolvers/outputs/OrderCount";

@TypeGraphQL.ObjectType("Order", {
  isAbstract: true
})
export class Order {
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
  offerListId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerGot!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerGotNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerGave!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerGaveNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaidPrice?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaidPrice?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  penalty!: string;

  takenOffers?: TakenOffer[];

  mangrove?: Mangrove;

  offerList?: OfferList;

  taker?: Account;

  @TypeGraphQL.Field(_type => OrderCount, {
    nullable: true
  })
  _count?: OrderCount | null;
}
