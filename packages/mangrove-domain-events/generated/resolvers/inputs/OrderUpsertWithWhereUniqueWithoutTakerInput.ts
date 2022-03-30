import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutTakerInput } from "../inputs/OrderCreateWithoutTakerInput";
import { OrderUpdateWithoutTakerInput } from "../inputs/OrderUpdateWithoutTakerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutTakerInput", {
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutTakerInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutTakerInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutTakerInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutTakerInput, {
    nullable: false
  })
  create!: OrderCreateWithoutTakerInput;
}
