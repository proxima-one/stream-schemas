import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereOutboundInput";
import { TokenUpdateWithoutOfferListsWhereOutboundInput } from "../inputs/TokenUpdateWithoutOfferListsWhereOutboundInput";

@TypeGraphQL.InputType("TokenUpsertWithoutOfferListsWhereOutboundInput", {
  isAbstract: true
})
export class TokenUpsertWithoutOfferListsWhereOutboundInput {
  @TypeGraphQL.Field(_type => TokenUpdateWithoutOfferListsWhereOutboundInput, {
    nullable: false
  })
  update!: TokenUpdateWithoutOfferListsWhereOutboundInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereOutboundInput, {
    nullable: false
  })
  create!: TokenCreateWithoutOfferListsWhereOutboundInput;
}
