import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyMakerInputEnvelope } from "../inputs/OfferCreateManyMakerInputEnvelope";
import { OfferCreateOrConnectWithoutMakerInput } from "../inputs/OfferCreateOrConnectWithoutMakerInput";
import { OfferCreateWithoutMakerInput } from "../inputs/OfferCreateWithoutMakerInput";
import { OfferScalarWhereInput } from "../inputs/OfferScalarWhereInput";
import { OfferUpdateManyWithWhereWithoutMakerInput } from "../inputs/OfferUpdateManyWithWhereWithoutMakerInput";
import { OfferUpdateWithWhereUniqueWithoutMakerInput } from "../inputs/OfferUpdateWithWhereUniqueWithoutMakerInput";
import { OfferUpsertWithWhereUniqueWithoutMakerInput } from "../inputs/OfferUpsertWithWhereUniqueWithoutMakerInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateManyWithoutMakerInput", {
  isAbstract: true
})
export class OfferUpdateManyWithoutMakerInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutMakerInput], {
    nullable: true
  })
  create?: OfferCreateWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutMakerInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpsertWithWhereUniqueWithoutMakerInput], {
    nullable: true
  })
  upsert?: OfferUpsertWithWhereUniqueWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyMakerInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyMakerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  set?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  delete?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpdateWithWhereUniqueWithoutMakerInput], {
    nullable: true
  })
  update?: OfferUpdateWithWhereUniqueWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpdateManyWithWhereWithoutMakerInput], {
    nullable: true
  })
  updateMany?: OfferUpdateManyWithWhereWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferScalarWhereInput[] | undefined;
}
