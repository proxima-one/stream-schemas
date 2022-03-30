import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutMakerBalancesInput } from "../inputs/MangroveCreateWithoutMakerBalancesInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateOrConnectWithoutMakerBalancesInput", {
  isAbstract: true
})
export class MangroveCreateOrConnectWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutMakerBalancesInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutMakerBalancesInput;
}
