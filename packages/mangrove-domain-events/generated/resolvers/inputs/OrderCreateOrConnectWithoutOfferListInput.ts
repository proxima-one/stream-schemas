import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOfferListInput } from "../inputs/OrderCreateWithoutOfferListInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutOfferListInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOfferListInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOfferListInput;
}
