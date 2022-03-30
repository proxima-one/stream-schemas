import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyOfferListInputEnvelope } from "../inputs/OrderCreateManyOfferListInputEnvelope";
import { OrderCreateOrConnectWithoutOfferListInput } from "../inputs/OrderCreateOrConnectWithoutOfferListInput";
import { OrderCreateWithoutOfferListInput } from "../inputs/OrderCreateWithoutOfferListInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutOfferListInput } from "../inputs/OrderUpdateManyWithWhereWithoutOfferListInput";
import { OrderUpdateWithWhereUniqueWithoutOfferListInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutOfferListInput";
import { OrderUpsertWithWhereUniqueWithoutOfferListInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutOfferListInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutOfferListInput", {
  isAbstract: true
})
export class OrderUpdateManyWithoutOfferListInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutOfferListInput], {
    nullable: true
  })
  create?: OrderCreateWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutOfferListInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutOfferListInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyOfferListInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyOfferListInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutOfferListInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutOfferListInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
