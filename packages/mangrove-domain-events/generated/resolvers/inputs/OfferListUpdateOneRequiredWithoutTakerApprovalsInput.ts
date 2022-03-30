import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateOrConnectWithoutTakerApprovalsInput } from "../inputs/OfferListCreateOrConnectWithoutTakerApprovalsInput";
import { OfferListCreateWithoutTakerApprovalsInput } from "../inputs/OfferListCreateWithoutTakerApprovalsInput";
import { OfferListUpdateWithoutTakerApprovalsInput } from "../inputs/OfferListUpdateWithoutTakerApprovalsInput";
import { OfferListUpsertWithoutTakerApprovalsInput } from "../inputs/OfferListUpsertWithoutTakerApprovalsInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateOneRequiredWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class OfferListUpdateOneRequiredWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => OfferListCreateWithoutTakerApprovalsInput, {
    nullable: true
  })
  create?: OfferListCreateWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateOrConnectWithoutTakerApprovalsInput, {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpsertWithoutTakerApprovalsInput, {
    nullable: true
  })
  upsert?: OfferListUpsertWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutTakerApprovalsInput, {
    nullable: true
  })
  update?: OfferListUpdateWithoutTakerApprovalsInput | undefined;
}
