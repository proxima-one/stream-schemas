import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateNestedOneWithoutTokensInput } from "../inputs/ChainCreateNestedOneWithoutTokensInput";
import { OfferListCreateNestedManyWithoutOutboundTokenInput } from "../inputs/OfferListCreateNestedManyWithoutOutboundTokenInput";

@TypeGraphQL.InputType("TokenCreateWithoutOfferListsWhereInboundInput", {
  isAbstract: true
})
export class TokenCreateWithoutOfferListsWhereInboundInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  @TypeGraphQL.Field(_type => ChainCreateNestedOneWithoutTokensInput, {
    nullable: false
  })
  chain!: ChainCreateNestedOneWithoutTokensInput;

  @TypeGraphQL.Field(_type => OfferListCreateNestedManyWithoutOutboundTokenInput, {
    nullable: true
  })
  offerListsWhereOutbound?: OfferListCreateNestedManyWithoutOutboundTokenInput | undefined;
}
