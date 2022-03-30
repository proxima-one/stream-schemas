import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutMangroveInput } from "../inputs/OrderCreateWithoutMangroveInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutMangroveInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: OrderCreateWithoutMangroveInput;
}
