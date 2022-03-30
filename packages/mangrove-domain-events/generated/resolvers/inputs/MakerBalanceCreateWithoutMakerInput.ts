import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateNestedOneWithoutMakerBalancesInput } from "../inputs/MangroveCreateNestedOneWithoutMakerBalancesInput";

@TypeGraphQL.InputType("MakerBalanceCreateWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceCreateWithoutMakerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  balance!: string;

  @TypeGraphQL.Field(_type => MangroveCreateNestedOneWithoutMakerBalancesInput, {
    nullable: false
  })
  mangrove!: MangroveCreateNestedOneWithoutMakerBalancesInput;
}
