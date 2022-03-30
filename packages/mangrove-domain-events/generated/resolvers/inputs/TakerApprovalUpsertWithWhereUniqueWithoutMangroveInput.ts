import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutMangroveInput } from "../inputs/TakerApprovalCreateWithoutMangroveInput";
import { TakerApprovalUpdateWithoutMangroveInput } from "../inputs/TakerApprovalUpdateWithoutMangroveInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutMangroveInput, {
    nullable: false
  })
  update!: TakerApprovalUpdateWithoutMangroveInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutMangroveInput;
}
