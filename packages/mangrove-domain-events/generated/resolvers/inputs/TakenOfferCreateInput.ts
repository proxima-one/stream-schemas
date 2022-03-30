import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutTakenOffersInput } from "../inputs/OrderCreateNestedOneWithoutTakenOffersInput";

@TypeGraphQL.InputType("TakenOfferCreateInput", {
  isAbstract: true
})
export class TakenOfferCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  takerPaysPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  posthookFailed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  failReason?: string | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutTakenOffersInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutTakenOffersInput;
}
