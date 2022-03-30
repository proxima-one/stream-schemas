import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutMakerBalancesInput } from "../inputs/MangroveCreateOrConnectWithoutMakerBalancesInput";
import { MangroveCreateWithoutMakerBalancesInput } from "../inputs/MangroveCreateWithoutMakerBalancesInput";
import { MangroveUpdateWithoutMakerBalancesInput } from "../inputs/MangroveUpdateWithoutMakerBalancesInput";
import { MangroveUpsertWithoutMakerBalancesInput } from "../inputs/MangroveUpsertWithoutMakerBalancesInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateOneRequiredWithoutMakerBalancesInput", {
  isAbstract: true
})
export class MangroveUpdateOneRequiredWithoutMakerBalancesInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutMakerBalancesInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutMakerBalancesInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpsertWithoutMakerBalancesInput, {
    nullable: true
  })
  upsert?: MangroveUpsertWithoutMakerBalancesInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutMakerBalancesInput, {
    nullable: true
  })
  update?: MangroveUpdateWithoutMakerBalancesInput | undefined;
}
