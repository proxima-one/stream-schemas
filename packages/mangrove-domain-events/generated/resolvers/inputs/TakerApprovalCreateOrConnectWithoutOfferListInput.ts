import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutOfferListInput } from "../inputs/TakerApprovalCreateWithoutOfferListInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateOrConnectWithoutOfferListInput", {
  isAbstract: true
})
export class TakerApprovalCreateOrConnectWithoutOfferListInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutOfferListInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutOfferListInput;
}
