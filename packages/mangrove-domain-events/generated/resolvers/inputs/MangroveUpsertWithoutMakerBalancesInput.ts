import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutMakerBalancesInput } from "../inputs/MangroveCreateWithoutMakerBalancesInput";
import { MangroveUpdateWithoutMakerBalancesInput } from "../inputs/MangroveUpdateWithoutMakerBalancesInput";

@TypeGraphQL.InputType("MangroveUpsertWithoutMakerBalancesInput", {
  isAbstract: true
})
export class MangroveUpsertWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => MangroveUpdateWithoutMakerBalancesInput, {
    nullable: false
  })
  update!: MangroveUpdateWithoutMakerBalancesInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutMakerBalancesInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutMakerBalancesInput;
}
