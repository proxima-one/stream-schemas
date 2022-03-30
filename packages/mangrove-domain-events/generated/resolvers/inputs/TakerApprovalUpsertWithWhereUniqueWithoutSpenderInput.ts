import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutSpenderInput } from "../inputs/TakerApprovalCreateWithoutSpenderInput";
import { TakerApprovalUpdateWithoutSpenderInput } from "../inputs/TakerApprovalUpdateWithoutSpenderInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutSpenderInput, {
    nullable: false
  })
  update!: TakerApprovalUpdateWithoutSpenderInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutSpenderInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutSpenderInput;
}
