import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutSpenderInput } from "../inputs/TakerApprovalCreateWithoutSpenderInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateOrConnectWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalCreateOrConnectWithoutSpenderInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutSpenderInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutSpenderInput;
}
