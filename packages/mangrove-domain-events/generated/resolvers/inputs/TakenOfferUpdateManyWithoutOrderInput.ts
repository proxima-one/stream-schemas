import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferCreateManyOrderInputEnvelope } from "../inputs/TakenOfferCreateManyOrderInputEnvelope";
import { TakenOfferCreateOrConnectWithoutOrderInput } from "../inputs/TakenOfferCreateOrConnectWithoutOrderInput";
import { TakenOfferCreateWithoutOrderInput } from "../inputs/TakenOfferCreateWithoutOrderInput";
import { TakenOfferScalarWhereInput } from "../inputs/TakenOfferScalarWhereInput";
import { TakenOfferUpdateManyWithWhereWithoutOrderInput } from "../inputs/TakenOfferUpdateManyWithWhereWithoutOrderInput";
import { TakenOfferUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/TakenOfferUpdateWithWhereUniqueWithoutOrderInput";
import { TakenOfferUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/TakenOfferUpsertWithWhereUniqueWithoutOrderInput";
import { TakenOfferWhereUniqueInput } from "../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.InputType("TakenOfferUpdateManyWithoutOrderInput", {
  isAbstract: true
})
export class TakenOfferUpdateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [TakenOfferCreateWithoutOrderInput], {
    nullable: true
  })
  create?: TakenOfferCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: TakenOfferCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: TakenOfferUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => TakenOfferCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: TakenOfferCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereUniqueInput], {
    nullable: true
  })
  set?: TakenOfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TakenOfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereUniqueInput], {
    nullable: true
  })
  delete?: TakenOfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereUniqueInput], {
    nullable: true
  })
  connect?: TakenOfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: TakenOfferUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: TakenOfferUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TakenOfferScalarWhereInput[] | undefined;
}
