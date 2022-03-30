import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateOneRequiredWithoutMakerBalancesInput } from "../inputs/AccountUpdateOneRequiredWithoutMakerBalancesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MakerBalanceUpdateWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceUpdateWithoutMangroveInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  balance?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutMakerBalancesInput, {
    nullable: true
  })
  maker?: AccountUpdateOneRequiredWithoutMakerBalancesInput | undefined;
}
