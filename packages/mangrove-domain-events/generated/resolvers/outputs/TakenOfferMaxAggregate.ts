import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TakenOfferMaxAggregate", {
  isAbstract: true
})
export class TakenOfferMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takerWants!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerWantsNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takerGives!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerGivesNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  posthookFailed!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  failReason!: string | null;
}
