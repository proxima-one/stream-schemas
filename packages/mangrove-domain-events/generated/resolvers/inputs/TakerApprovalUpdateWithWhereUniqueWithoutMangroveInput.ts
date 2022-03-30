import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalUpdateWithoutMangroveInput } from "../inputs/TakerApprovalUpdateWithoutMangroveInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutMangroveInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateWithoutMangroveInput;
}
