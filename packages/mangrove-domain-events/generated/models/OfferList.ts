import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mangrove } from "../models/Mangrove";
import { Offer } from "../models/Offer";
import { Order } from "../models/Order";
import { TakerApproval } from "../models/TakerApproval";
import { Token } from "../models/Token";
import { OfferListCount } from "../resolvers/outputs/OfferListCount";

@TypeGraphQL.ObjectType("OfferList", {
  isAbstract: true
})
export class OfferList {
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
  active?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fee?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasbase?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  density?: string | null;

  mangrove?: Mangrove;

  inboundToken?: Token;

  outboundToken?: Token;

  offers?: Offer[];

  takerApprovals?: TakerApproval[];

  orders?: Order[];

  @TypeGraphQL.Field(_type => OfferListCount, {
    nullable: true
  })
  _count?: OfferListCount | null;
}
