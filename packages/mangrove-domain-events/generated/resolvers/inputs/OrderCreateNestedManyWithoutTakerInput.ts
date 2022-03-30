import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyTakerInputEnvelope } from "../inputs/OrderCreateManyTakerInputEnvelope";
import { OrderCreateOrConnectWithoutTakerInput } from "../inputs/OrderCreateOrConnectWithoutTakerInput";
import { OrderCreateWithoutTakerInput } from "../inputs/OrderCreateWithoutTakerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutTakerInput", {
  isAbstract: true
})
export class OrderCreateNestedManyWithoutTakerInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutTakerInput], {
    nullable: true
  })
  create?: OrderCreateWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutTakerInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutTakerInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyTakerInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyTakerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
