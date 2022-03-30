import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MakerBalanceMaxAggregate", {
  isAbstract: true
})
export class MakerBalanceMaxAggregate {
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
  makerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  balance!: string | null;
}
