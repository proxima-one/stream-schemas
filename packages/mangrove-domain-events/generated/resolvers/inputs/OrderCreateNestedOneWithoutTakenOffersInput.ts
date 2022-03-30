import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutTakenOffersInput } from "../inputs/OrderCreateOrConnectWithoutTakenOffersInput";
import { OrderCreateWithoutTakenOffersInput } from "../inputs/OrderCreateWithoutTakenOffersInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutTakenOffersInput", {
  isAbstract: true
})
export class OrderCreateNestedOneWithoutTakenOffersInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutTakenOffersInput, {
    nullable: true
  })
  create?: OrderCreateWithoutTakenOffersInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutTakenOffersInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutTakenOffersInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
