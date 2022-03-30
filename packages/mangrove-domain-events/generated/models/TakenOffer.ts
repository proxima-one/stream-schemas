import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order } from "../models/Order";

@TypeGraphQL.ObjectType("TakenOffer", {
  isAbstract: true
})
export class TakenOffer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerWants!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerWantsNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerGives!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerGivesNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaysPrice?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  posthookFailed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  failReason?: string | null;

  order?: Order;
}
