import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput } from "../inputs/AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput";
import { MangroveUpdateOneRequiredWithoutTakerApprovalsInput } from "../inputs/MangroveUpdateOneRequiredWithoutTakerApprovalsInput";
import { OfferListUpdateOneRequiredWithoutTakerApprovalsInput } from "../inputs/OfferListUpdateOneRequiredWithoutTakerApprovalsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TakerApprovalUpdateWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalUpdateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateOneRequiredWithoutTakerApprovalsInput, {
    nullable: true
  })
  mangrove?: MangroveUpdateOneRequiredWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => OfferListUpdateOneRequiredWithoutTakerApprovalsInput, {
    nullable: true
  })
  offerList?: OfferListUpdateOneRequiredWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput, {
    nullable: true
  })
  spender?: AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput | undefined;
}
