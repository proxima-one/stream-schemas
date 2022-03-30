import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutMangroveInput } from "../inputs/TakerApprovalCreateWithoutMangroveInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateOrConnectWithoutMangroveInput", {
  isAbstract: true
})
export class TakerApprovalCreateOrConnectWithoutMangroveInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutMangroveInput;
}
