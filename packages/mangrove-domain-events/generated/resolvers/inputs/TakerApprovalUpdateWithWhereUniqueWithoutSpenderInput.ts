import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalUpdateWithoutSpenderInput } from "../inputs/TakerApprovalUpdateWithoutSpenderInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutSpenderInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateWithoutSpenderInput;
}
