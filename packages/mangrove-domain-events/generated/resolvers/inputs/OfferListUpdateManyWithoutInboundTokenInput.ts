import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyInboundTokenInputEnvelope } from "../inputs/OfferListCreateManyInboundTokenInputEnvelope";
import { OfferListCreateOrConnectWithoutInboundTokenInput } from "../inputs/OfferListCreateOrConnectWithoutInboundTokenInput";
import { OfferListCreateWithoutInboundTokenInput } from "../inputs/OfferListCreateWithoutInboundTokenInput";
import { OfferListScalarWhereInput } from "../inputs/OfferListScalarWhereInput";
import { OfferListUpdateManyWithWhereWithoutInboundTokenInput } from "../inputs/OfferListUpdateManyWithWhereWithoutInboundTokenInput";
import { OfferListUpdateWithWhereUniqueWithoutInboundTokenInput } from "../inputs/OfferListUpdateWithWhereUniqueWithoutInboundTokenInput";
import { OfferListUpsertWithWhereUniqueWithoutInboundTokenInput } from "../inputs/OfferListUpsertWithWhereUniqueWithoutInboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateManyWithoutInboundTokenInput", {
  isAbstract: true
})
export class OfferListUpdateManyWithoutInboundTokenInput {
  @TypeGraphQL.Field(_type => [OfferListCreateWithoutInboundTokenInput], {
    nullable: true
  })
  create?: OfferListCreateWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListCreateOrConnectWithoutInboundTokenInput], {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpsertWithWhereUniqueWithoutInboundTokenInput], {
    nullable: true
  })
  upsert?: OfferListUpsertWithWhereUniqueWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateManyInboundTokenInputEnvelope, {
    nullable: true
  })
  createMany?: OfferListCreateManyInboundTokenInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  set?: OfferListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OfferListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  delete?: OfferListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpdateWithWhereUniqueWithoutInboundTokenInput], {
    nullable: true
  })
  update?: OfferListUpdateWithWhereUniqueWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpdateManyWithWhereWithoutInboundTokenInput], {
    nullable: true
  })
  updateMany?: OfferListUpdateManyWithWhereWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferListScalarWhereInput[] | undefined;
}
