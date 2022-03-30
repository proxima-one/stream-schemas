import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OfferListMaxAggregate", {
  isAbstract: true
})
export class OfferListMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mangroveId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  inboundTokenId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  outboundTokenId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fee!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasbase!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  density!: string | null;
}
