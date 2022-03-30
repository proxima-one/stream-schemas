import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutOfferListsWhereInboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereInboundInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenCreateOrConnectWithoutOfferListsWhereInboundInput", {
  isAbstract: true
})
export class TokenCreateOrConnectWithoutOfferListsWhereInboundInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereInboundInput, {
    nullable: false
  })
  create!: TokenCreateWithoutOfferListsWhereInboundInput;
}
