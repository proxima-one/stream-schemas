import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyMangroveInputEnvelope } from "../inputs/OrderCreateManyMangroveInputEnvelope";
import { OrderCreateOrConnectWithoutMangroveInput } from "../inputs/OrderCreateOrConnectWithoutMangroveInput";
import { OrderCreateWithoutMangroveInput } from "../inputs/OrderCreateWithoutMangroveInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutMangroveInput } from "../inputs/OrderUpdateManyWithWhereWithoutMangroveInput";
import { OrderUpdateWithWhereUniqueWithoutMangroveInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutMangroveInput";
import { OrderUpsertWithWhereUniqueWithoutMangroveInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutMangroveInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutMangroveInput", {
  isAbstract: true
})
export class OrderUpdateManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: OrderCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyMangroveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutMangroveInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
