import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyMangroveInputEnvelope } from "../inputs/OfferListCreateManyMangroveInputEnvelope";
import { OfferListCreateOrConnectWithoutMangroveInput } from "../inputs/OfferListCreateOrConnectWithoutMangroveInput";
import { OfferListCreateWithoutMangroveInput } from "../inputs/OfferListCreateWithoutMangroveInput";
import { OfferListScalarWhereInput } from "../inputs/OfferListScalarWhereInput";
import { OfferListUpdateManyWithWhereWithoutMangroveInput } from "../inputs/OfferListUpdateManyWithWhereWithoutMangroveInput";
import { OfferListUpdateWithWhereUniqueWithoutMangroveInput } from "../inputs/OfferListUpdateWithWhereUniqueWithoutMangroveInput";
import { OfferListUpsertWithWhereUniqueWithoutMangroveInput } from "../inputs/OfferListUpsertWithWhereUniqueWithoutMangroveInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateManyWithoutMangroveInput", {
  isAbstract: true
})
export class OfferListUpdateManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [OfferListCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: OfferListCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpsertWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  upsert?: OfferListUpsertWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: OfferListCreateManyMangroveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OfferListUpdateWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  update?: OfferListUpdateWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListUpdateManyWithWhereWithoutMangroveInput], {
    nullable: true
  })
  updateMany?: OfferListUpdateManyWithWhereWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferListScalarWhereInput[] | undefined;
}
