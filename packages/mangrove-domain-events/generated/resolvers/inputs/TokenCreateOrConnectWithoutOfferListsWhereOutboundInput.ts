import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereOutboundInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenCreateOrConnectWithoutOfferListsWhereOutboundInput", {
  isAbstract: true
})
export class TokenCreateOrConnectWithoutOfferListsWhereOutboundInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereOutboundInput, {
    nullable: false
  })
  create!: TokenCreateWithoutOfferListsWhereOutboundInput;
}
