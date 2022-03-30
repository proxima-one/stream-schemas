import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainRelationFilter } from "../inputs/ChainRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OfferListListRelationFilter } from "../inputs/OfferListListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TokenWhereInput", {
  isAbstract: true
})
export class TokenWhereInput {
  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  AND?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  OR?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  NOT?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chainId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  symbol?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  decimals?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ChainRelationFilter, {
    nullable: true
  })
  chain?: ChainRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListListRelationFilter, {
    nullable: true
  })
  offerListsWhereInbound?: OfferListListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListListRelationFilter, {
    nullable: true
  })
  offerListsWhereOutbound?: OfferListListRelationFilter | undefined;
}
