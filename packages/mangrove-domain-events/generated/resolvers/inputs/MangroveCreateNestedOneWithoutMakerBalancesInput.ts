import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutMakerBalancesInput } from "../inputs/MangroveCreateOrConnectWithoutMakerBalancesInput";
import { MangroveCreateWithoutMakerBalancesInput } from "../inputs/MangroveCreateWithoutMakerBalancesInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateNestedOneWithoutMakerBalancesInput", {
  isAbstract: true
})
export class MangroveCreateNestedOneWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutMakerBalancesInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutMakerBalancesInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;
}
