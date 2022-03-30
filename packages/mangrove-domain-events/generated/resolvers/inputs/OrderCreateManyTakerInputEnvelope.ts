import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyTakerInput } from "../inputs/OrderCreateManyTakerInput";

@TypeGraphQL.InputType("OrderCreateManyTakerInputEnvelope", {
  isAbstract: true
})
export class OrderCreateManyTakerInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyTakerInput], {
    nullable: false
  })
  data!: OrderCreateManyTakerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
