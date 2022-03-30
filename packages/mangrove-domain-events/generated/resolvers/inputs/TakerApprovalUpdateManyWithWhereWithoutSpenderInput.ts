import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalScalarWhereInput } from "../inputs/TakerApprovalScalarWhereInput";
import { TakerApprovalUpdateManyMutationInput } from "../inputs/TakerApprovalUpdateManyMutationInput";

@TypeGraphQL.InputType("TakerApprovalUpdateManyWithWhereWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalUpdateManyWithWhereWithoutSpenderInput {
  @TypeGraphQL.Field(_type => TakerApprovalScalarWhereInput, {
    nullable: false
  })
  where!: TakerApprovalScalarWhereInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyMutationInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateManyMutationInput;
}
