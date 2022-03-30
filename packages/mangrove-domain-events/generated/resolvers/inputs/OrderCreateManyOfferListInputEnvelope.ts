import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyOfferListInput } from "../inputs/OrderCreateManyOfferListInput";

@TypeGraphQL.InputType("OrderCreateManyOfferListInputEnvelope", {
  isAbstract: true
})
export class OrderCreateManyOfferListInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyOfferListInput], {
    nullable: false
  })
  data!: OrderCreateManyOfferListInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
