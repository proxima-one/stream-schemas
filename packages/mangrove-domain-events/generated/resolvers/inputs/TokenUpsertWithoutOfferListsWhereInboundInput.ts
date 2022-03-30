import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutOfferListsWhereInboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereInboundInput";
import { TokenUpdateWithoutOfferListsWhereInboundInput } from "../inputs/TokenUpdateWithoutOfferListsWhereInboundInput";

@TypeGraphQL.InputType("TokenUpsertWithoutOfferListsWhereInboundInput", {
  isAbstract: true
})
export class TokenUpsertWithoutOfferListsWhereInboundInput {
  @TypeGraphQL.Field(_type => TokenUpdateWithoutOfferListsWhereInboundInput, {
    nullable: false
  })
  update!: TokenUpdateWithoutOfferListsWhereInboundInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereInboundInput, {
    nullable: false
  })
  create!: TokenCreateWithoutOfferListsWhereInboundInput;
}
