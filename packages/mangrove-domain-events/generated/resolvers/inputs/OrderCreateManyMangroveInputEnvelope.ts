import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyMangroveInput } from "../inputs/OrderCreateManyMangroveInput";

@TypeGraphQL.InputType("OrderCreateManyMangroveInputEnvelope", {
  isAbstract: true
})
export class OrderCreateManyMangroveInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyMangroveInput], {
    nullable: false
  })
  data!: OrderCreateManyMangroveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
