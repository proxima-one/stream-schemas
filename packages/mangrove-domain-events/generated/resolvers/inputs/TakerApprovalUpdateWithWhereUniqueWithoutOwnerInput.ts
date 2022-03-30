import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalUpdateWithoutOwnerInput } from "../inputs/TakerApprovalUpdateWithoutOwnerInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateWithoutOwnerInput;
}
