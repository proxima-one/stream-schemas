import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutTakerInput } from "../inputs/OrderCreateWithoutTakerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutTakerInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutTakerInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutTakerInput, {
    nullable: false
  })
  create!: OrderCreateWithoutTakerInput;
}
