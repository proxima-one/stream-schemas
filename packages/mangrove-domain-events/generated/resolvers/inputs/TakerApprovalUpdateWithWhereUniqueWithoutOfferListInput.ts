import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalUpdateWithoutOfferListInput } from "../inputs/TakerApprovalUpdateWithoutOfferListInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput", {
  isAbstract: true
})
export class TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutOfferListInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateWithoutOfferListInput;
}
