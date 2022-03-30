import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TokenUpdateManyWithoutChainInput } from "../inputs/TokenUpdateManyWithoutChainInput";

@TypeGraphQL.InputType("ChainUpdateWithoutMangrovesInput", {
  isAbstract: true
})
export class ChainUpdateWithoutMangrovesInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateManyWithoutChainInput, {
    nullable: true
  })
  tokens?: TokenUpdateManyWithoutChainInput | undefined;
}
