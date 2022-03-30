import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Chain } from "../models/Chain";
import { OfferList } from "../models/OfferList";
import { TokenCount } from "../resolvers/outputs/TokenCount";

@TypeGraphQL.ObjectType("Token", {
  isAbstract: true
})
export class Token {
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
  symbol!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  decimals!: number;

  chain?: Chain;

  offerListsWhereInbound?: OfferList[];

  offerListsWhereOutbound?: OfferList[];

  @TypeGraphQL.Field(_type => TokenCount, {
    nullable: true
  })
  _count?: TokenCount | null;
}
