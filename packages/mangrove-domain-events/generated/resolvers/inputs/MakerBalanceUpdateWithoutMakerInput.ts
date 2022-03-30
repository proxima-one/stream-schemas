import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveUpdateOneRequiredWithoutMakerBalancesInput } from "../inputs/MangroveUpdateOneRequiredWithoutMakerBalancesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MakerBalanceUpdateWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceUpdateWithoutMakerInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  balance?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateOneRequiredWithoutMakerBalancesInput, {
    nullable: true
  })
  mangrove?: MangroveUpdateOneRequiredWithoutMakerBalancesInput | undefined;
}
