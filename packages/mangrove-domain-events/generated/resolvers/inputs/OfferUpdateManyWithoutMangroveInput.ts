import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyMangroveInputEnvelope } from "../inputs/OfferCreateManyMangroveInputEnvelope";
import { OfferCreateOrConnectWithoutMangroveInput } from "../inputs/OfferCreateOrConnectWithoutMangroveInput";
import { OfferCreateWithoutMangroveInput } from "../inputs/OfferCreateWithoutMangroveInput";
import { OfferScalarWhereInput } from "../inputs/OfferScalarWhereInput";
import { OfferUpdateManyWithWhereWithoutMangroveInput } from "../inputs/OfferUpdateManyWithWhereWithoutMangroveInput";
import { OfferUpdateWithWhereUniqueWithoutMangroveInput } from "../inputs/OfferUpdateWithWhereUniqueWithoutMangroveInput";
import { OfferUpsertWithWhereUniqueWithoutMangroveInput } from "../inputs/OfferUpsertWithWhereUniqueWithoutMangroveInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateManyWithoutMangroveInput", {
  isAbstract: true
})
export class OfferUpdateManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: OfferCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpsertWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  upsert?: OfferUpsertWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyMangroveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OfferUpdateWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  update?: OfferUpdateWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpdateManyWithWhereWithoutMangroveInput], {
    nullable: true
  })
  updateMany?: OfferUpdateManyWithWhereWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferScalarWhereInput[] | undefined;
}
