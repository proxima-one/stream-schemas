import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { Mangrove } from "../models/Mangrove";

@TypeGraphQL.ObjectType("MakerBalance", {
  isAbstract: true
})
export class MakerBalance {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mangroveId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  makerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  balance!: string;

  mangrove?: Mangrove;

  maker?: Account;
}
