import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutOfferListInput } from "../inputs/OrderUpdateWithoutOfferListInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutOfferListInput", {
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOfferListInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutOfferListInput;
}
