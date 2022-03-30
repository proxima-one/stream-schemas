import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyOutboundTokenInputEnvelope } from "../inputs/OfferListCreateManyOutboundTokenInputEnvelope";
import { OfferListCreateOrConnectWithoutOutboundTokenInput } from "../inputs/OfferListCreateOrConnectWithoutOutboundTokenInput";
import { OfferListCreateWithoutOutboundTokenInput } from "../inputs/OfferListCreateWithoutOutboundTokenInput";
import { OfferListScalarWhereInput } from "../inputs/OfferListScalarWhereInput";
import { OfferListUpdateManyWithWhereWithoutOutboundTokenInput } from "../inputs/OfferListUpdateManyWithWhereWithoutOutboundTokenInput";
import { OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput } from "../inputs/OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput";
import { OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput } from "../inputs/OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateManyWithoutOutboundTokenInput", {
  isAbstract: true
})
export class OfferListUpdateManyWithoutOutboundTokenInput {
  @TypeGraphQL.Field(_type => [OfferListCreateWithoutOutboundTokenInput], {
    nullable: true
  })
  create?: OfferListCreateWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListCreateOrConnectWithoutOutboundTokenInput], {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput], {
    nullable: true
  })
  upsert?: OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateManyOutboundTokenInputEnvelope, {
    nullable: true
  })
  createMany?: OfferListCreateManyOutboundTokenInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput], {
    nullable: true
  })
  update?: OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpdateManyWithWhereWithoutOutboundTokenInput], {
    nullable: true
  })
  updateMany?: OfferListUpdateManyWithWhereWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferListScalarWhereInput[] | undefined;
}
