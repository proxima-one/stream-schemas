import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutOwnerInput } from "../inputs/TakerApprovalCreateWithoutOwnerInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutOwnerInput;
}
