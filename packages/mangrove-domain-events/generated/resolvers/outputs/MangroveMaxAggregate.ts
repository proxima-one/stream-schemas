import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MangroveMaxAggregate", {
  isAbstract: true
})
export class MangroveMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  chainId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  governance!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  monitor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vault!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  useOracle!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  notify!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasmax!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasprice!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dead!: boolean | null;
}
