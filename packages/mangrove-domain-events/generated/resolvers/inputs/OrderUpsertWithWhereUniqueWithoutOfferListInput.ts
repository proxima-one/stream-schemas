import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOfferListInput } from "../inputs/OrderCreateWithoutOfferListInput";
import { OrderUpdateWithoutOfferListInput } from "../inputs/OrderUpdateWithoutOfferListInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutOfferListInput", {
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOfferListInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOfferListInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOfferListInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOfferListInput;
}
