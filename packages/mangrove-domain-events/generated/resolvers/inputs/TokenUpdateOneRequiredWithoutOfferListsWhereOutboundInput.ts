import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateOrConnectWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateOrConnectWithoutOfferListsWhereOutboundInput";
import { TokenCreateWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereOutboundInput";
import { TokenUpdateWithoutOfferListsWhereOutboundInput } from "../inputs/TokenUpdateWithoutOfferListsWhereOutboundInput";
import { TokenUpsertWithoutOfferListsWhereOutboundInput } from "../inputs/TokenUpsertWithoutOfferListsWhereOutboundInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput", {
  isAbstract: true
})
export class TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput {
  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  create?: TokenCreateWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenCreateOrConnectWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpsertWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  upsert?: TokenUpsertWithoutOfferListsWhereOutboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: true
  })
  connect?: TokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutOfferListsWhereOutboundInput, {
    nullable: true
  })
  update?: TokenUpdateWithoutOfferListsWhereOutboundInput | undefined;
}
