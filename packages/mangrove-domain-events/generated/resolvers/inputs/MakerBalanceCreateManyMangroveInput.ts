import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MakerBalanceCreateManyMangroveInput", {
  isAbstract: true
})
export class MakerBalanceCreateManyMangroveInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  makerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  balance!: string;
}
