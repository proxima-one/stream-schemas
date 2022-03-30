import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput } from "../inputs/AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput";
import { AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput } from "../inputs/AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput";
import { MangroveUpdateOneRequiredWithoutTakerApprovalsInput } from "../inputs/MangroveUpdateOneRequiredWithoutTakerApprovalsInput";
import { OfferListUpdateOneRequiredWithoutTakerApprovalsInput } from "../inputs/OfferListUpdateOneRequiredWithoutTakerApprovalsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TakerApprovalUpdateInput", {
  isAbstract: true
})
export class TakerApprovalUpdateInput {
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

  @TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  owner?: AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput, {
    nullable: true
  })
  spender?: AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput | undefined;
}
