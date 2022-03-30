import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MangroveUpdateManyWithoutChainInput } from "../inputs/MangroveUpdateManyWithoutChainInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TokenUpdateManyWithoutChainInput } from "../inputs/TokenUpdateManyWithoutChainInput";

@TypeGraphQL.InputType("ChainUpdateInput", {
  isAbstract: true
})
export class ChainUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateManyWithoutChainInput, {
    nullable: true
  })
  mangroves?: MangroveUpdateManyWithoutChainInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateManyWithoutChainInput, {
    nullable: true
  })
  tokens?: TokenUpdateManyWithoutChainInput | undefined;
}
