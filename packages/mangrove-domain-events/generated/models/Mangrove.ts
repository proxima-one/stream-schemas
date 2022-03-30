import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Chain } from "../models/Chain";
import { MakerBalance } from "../models/MakerBalance";
import { Offer } from "../models/Offer";
import { OfferList } from "../models/OfferList";
import { Order } from "../models/Order";
import { TakerApproval } from "../models/TakerApproval";
import { MangroveCount } from "../resolvers/outputs/MangroveCount";

@TypeGraphQL.ObjectType("Mangrove", {
  isAbstract: true
})
export class Mangrove {
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
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  governance?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  monitor?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vault?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  useOracle?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  notify?: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasmax?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasprice?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dead?: boolean | null;

  chain?: Chain;

  offerLists?: OfferList[];

  offers?: Offer[];

  orders?: Order[];

  makerBalances?: MakerBalance[];

  takerApprovals?: TakerApproval[];

  @TypeGraphQL.Field(_type => MangroveCount, {
    nullable: true
  })
  _count?: MangroveCount | null;
}
