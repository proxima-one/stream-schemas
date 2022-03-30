import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateOrConnectWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateOrConnectWithoutOfferListsWhereOutboundInput";
import { TokenCreateWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereOutboundInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenCreateNestedOneWithoutOfferListsWhereOutboundInput", {
  isAbstract: true
})
export class TokenCreateNestedOneWithoutOfferListsWhereOutboundInput {
  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  create?: TokenCreateWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenCreateOrConnectWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: true
  })
  connect?: TokenWhereUniqueInput | undefined;
}
