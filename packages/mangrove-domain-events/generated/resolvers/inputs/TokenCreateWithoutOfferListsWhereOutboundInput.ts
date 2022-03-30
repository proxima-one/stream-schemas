import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateNestedOneWithoutTokensInput } from "../inputs/ChainCreateNestedOneWithoutTokensInput";
import { OfferListCreateNestedManyWithoutInboundTokenInput } from "../inputs/OfferListCreateNestedManyWithoutInboundTokenInput";

@TypeGraphQL.InputType("TokenCreateWithoutOfferListsWhereOutboundInput", {
  isAbstract: true
})
export class TokenCreateWithoutOfferListsWhereOutboundInput {
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

  @TypeGraphQL.Field(_type => OfferListCreateNestedManyWithoutInboundTokenInput, {
    nullable: true
  })
  offerListsWhereInbound?: OfferListCreateNestedManyWithoutInboundTokenInput | undefined;
}
