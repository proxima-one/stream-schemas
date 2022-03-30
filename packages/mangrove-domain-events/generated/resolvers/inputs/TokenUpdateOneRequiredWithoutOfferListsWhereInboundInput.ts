import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateOrConnectWithoutOfferListsWhereInboundInput } from "../inputs/TokenCreateOrConnectWithoutOfferListsWhereInboundInput";
import { TokenCreateWithoutOfferListsWhereInboundInput } from "../inputs/TokenCreateWithoutOfferListsWhereInboundInput";
import { TokenUpdateWithoutOfferListsWhereInboundInput } from "../inputs/TokenUpdateWithoutOfferListsWhereInboundInput";
import { TokenUpsertWithoutOfferListsWhereInboundInput } from "../inputs/TokenUpsertWithoutOfferListsWhereInboundInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput", {
  isAbstract: true
})
export class TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput {
  @TypeGraphQL.Field(_type => TokenCreateWithoutOfferListsWhereInboundInput, {
    nullable: true
  })
  create?: TokenCreateWithoutOfferListsWhereInboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenCreateOrConnectWithoutOfferListsWhereInboundInput, {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutOfferListsWhereInboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpsertWithoutOfferListsWhereInboundInput, {
    nullable: true
  })
  upsert?: TokenUpsertWithoutOfferListsWhereInboundInput | undefined;

  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: true
  })
  connect?: TokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutOfferListsWhereInboundInput, {
    nullable: true
  })
  update?: TokenUpdateWithoutOfferListsWhereInboundInput | undefined;
}
