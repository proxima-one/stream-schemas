import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateOrConnectWithoutOffersInput } from "../inputs/OfferListCreateOrConnectWithoutOffersInput";
import { OfferListCreateWithoutOffersInput } from "../inputs/OfferListCreateWithoutOffersInput";
import { OfferListUpdateWithoutOffersInput } from "../inputs/OfferListUpdateWithoutOffersInput";
import { OfferListUpsertWithoutOffersInput } from "../inputs/OfferListUpsertWithoutOffersInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateOneRequiredWithoutOffersInput", {
  isAbstract: true
})
export class OfferListUpdateOneRequiredWithoutOffersInput {
  @TypeGraphQL.Field(_type => OfferListCreateWithoutOffersInput, {
    nullable: true
  })
  create?: OfferListCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpsertWithoutOffersInput, {
    nullable: true
  })
  upsert?: OfferListUpsertWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutOffersInput, {
    nullable: true
  })
  update?: OfferListUpdateWithoutOffersInput | undefined;
}
