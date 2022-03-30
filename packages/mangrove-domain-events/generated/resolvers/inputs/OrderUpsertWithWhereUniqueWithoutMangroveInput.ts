import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutMangroveInput } from "../inputs/OrderCreateWithoutMangroveInput";
import { OrderUpdateWithoutMangroveInput } from "../inputs/OrderUpdateWithoutMangroveInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutMangroveInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutMangroveInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: OrderCreateWithoutMangroveInput;
}
