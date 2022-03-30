import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyOfferListInputEnvelope } from "../inputs/OrderCreateManyOfferListInputEnvelope";
import { OrderCreateOrConnectWithoutOfferListInput } from "../inputs/OrderCreateOrConnectWithoutOfferListInput";
import { OrderCreateWithoutOfferListInput } from "../inputs/OrderCreateWithoutOfferListInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutOfferListInput", {
  isAbstract: true
})
export class OrderCreateNestedManyWithoutOfferListInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutOfferListInput], {
    nullable: true
  })
  create?: OrderCreateWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutOfferListInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyOfferListInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyOfferListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
