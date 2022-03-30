import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mangrove } from "../models/Mangrove";
import { Token } from "../models/Token";
import { ChainCount } from "../resolvers/outputs/ChainCount";

@TypeGraphQL.ObjectType("Chain", {
  isAbstract: true
})
export class Chain {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  mangroves?: Mangrove[];

  tokens?: Token[];

  @TypeGraphQL.Field(_type => ChainCount, {
    nullable: true
  })
  _count?: ChainCount | null;
}
