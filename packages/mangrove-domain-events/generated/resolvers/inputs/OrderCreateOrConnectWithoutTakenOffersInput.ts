import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutTakenOffersInput } from "../inputs/OrderCreateWithoutTakenOffersInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutTakenOffersInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutTakenOffersInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutTakenOffersInput, {
    nullable: false
  })
  create!: OrderCreateWithoutTakenOffersInput;
}
