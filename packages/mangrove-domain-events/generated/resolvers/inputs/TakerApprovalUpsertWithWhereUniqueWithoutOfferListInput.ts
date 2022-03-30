import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutOfferListInput } from "../inputs/TakerApprovalCreateWithoutOfferListInput";
import { TakerApprovalUpdateWithoutOfferListInput } from "../inputs/TakerApprovalUpdateWithoutOfferListInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput", {
  isAbstract: true
})
export class TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutOfferListInput, {
    nullable: false
  })
  update!: TakerApprovalUpdateWithoutOfferListInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutOfferListInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutOfferListInput;
}
