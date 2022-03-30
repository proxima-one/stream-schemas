import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyTakerInputEnvelope } from "../inputs/OrderCreateManyTakerInputEnvelope";
import { OrderCreateOrConnectWithoutTakerInput } from "../inputs/OrderCreateOrConnectWithoutTakerInput";
import { OrderCreateWithoutTakerInput } from "../inputs/OrderCreateWithoutTakerInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutTakerInput } from "../inputs/OrderUpdateManyWithWhereWithoutTakerInput";
import { OrderUpdateWithWhereUniqueWithoutTakerInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutTakerInput";
import { OrderUpsertWithWhereUniqueWithoutTakerInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutTakerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutTakerInput", {
  isAbstract: true
})
export class OrderUpdateManyWithoutTakerInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutTakerInput], {
    nullable: true
  })
  create?: OrderCreateWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutTakerInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutTakerInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyTakerInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyTakerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutTakerInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutTakerInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
