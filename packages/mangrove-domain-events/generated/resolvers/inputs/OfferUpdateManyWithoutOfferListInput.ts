import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyOfferListInputEnvelope } from "../inputs/OfferCreateManyOfferListInputEnvelope";
import { OfferCreateOrConnectWithoutOfferListInput } from "../inputs/OfferCreateOrConnectWithoutOfferListInput";
import { OfferCreateWithoutOfferListInput } from "../inputs/OfferCreateWithoutOfferListInput";
import { OfferScalarWhereInput } from "../inputs/OfferScalarWhereInput";
import { OfferUpdateManyWithWhereWithoutOfferListInput } from "../inputs/OfferUpdateManyWithWhereWithoutOfferListInput";
import { OfferUpdateWithWhereUniqueWithoutOfferListInput } from "../inputs/OfferUpdateWithWhereUniqueWithoutOfferListInput";
import { OfferUpsertWithWhereUniqueWithoutOfferListInput } from "../inputs/OfferUpsertWithWhereUniqueWithoutOfferListInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateManyWithoutOfferListInput", {
  isAbstract: true
})
export class OfferUpdateManyWithoutOfferListInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutOfferListInput], {
    nullable: true
  })
  create?: OfferCreateWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutOfferListInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpsertWithWhereUniqueWithoutOfferListInput], {
    nullable: true
  })
  upsert?: OfferUpsertWithWhereUniqueWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyOfferListInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyOfferListInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OfferUpdateWithWhereUniqueWithoutOfferListInput], {
    nullable: true
  })
  update?: OfferUpdateWithWhereUniqueWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpdateManyWithWhereWithoutOfferListInput], {
    nullable: true
  })
  updateMany?: OfferUpdateManyWithWhereWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferScalarWhereInput[] | undefined;
}
