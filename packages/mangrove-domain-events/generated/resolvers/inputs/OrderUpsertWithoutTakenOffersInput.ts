import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutTakenOffersInput } from "../inputs/OrderCreateWithoutTakenOffersInput";
import { OrderUpdateWithoutTakenOffersInput } from "../inputs/OrderUpdateWithoutTakenOffersInput";

@TypeGraphQL.InputType("OrderUpsertWithoutTakenOffersInput", {
  isAbstract: true
})
export class OrderUpsertWithoutTakenOffersInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutTakenOffersInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutTakenOffersInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutTakenOffersInput, {
    nullable: false
  })
  create!: OrderCreateWithoutTakenOffersInput;
}
