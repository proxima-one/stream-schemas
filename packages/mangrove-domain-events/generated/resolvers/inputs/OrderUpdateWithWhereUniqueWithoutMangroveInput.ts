import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutMangroveInput } from "../inputs/OrderUpdateWithoutMangroveInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutMangroveInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutMangroveInput;
}
