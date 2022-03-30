import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MangroveCreateManyInput", {
  isAbstract: true
})
export class MangroveCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  chainId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  governance?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  monitor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vault?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  useOracle?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  notify?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasmax?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasprice?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dead?: boolean | undefined;
}
