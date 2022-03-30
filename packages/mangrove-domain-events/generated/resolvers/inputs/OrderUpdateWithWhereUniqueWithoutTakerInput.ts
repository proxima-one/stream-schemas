import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutTakerInput } from "../inputs/OrderUpdateWithoutTakerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutTakerInput", {
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutTakerInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutTakerInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutTakerInput;
}
