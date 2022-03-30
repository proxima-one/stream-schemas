import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyMangroveInputEnvelope } from "../inputs/OrderCreateManyMangroveInputEnvelope";
import { OrderCreateOrConnectWithoutMangroveInput } from "../inputs/OrderCreateOrConnectWithoutMangroveInput";
import { OrderCreateWithoutMangroveInput } from "../inputs/OrderCreateWithoutMangroveInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutMangroveInput", {
  isAbstract: true
})
export class OrderCreateNestedManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: OrderCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyMangroveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
