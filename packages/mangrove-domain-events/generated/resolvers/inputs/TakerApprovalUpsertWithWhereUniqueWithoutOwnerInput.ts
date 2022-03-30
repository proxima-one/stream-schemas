import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateWithoutOwnerInput } from "../inputs/TakerApprovalCreateWithoutOwnerInput";
import { TakerApprovalUpdateWithoutOwnerInput } from "../inputs/TakerApprovalUpdateWithoutOwnerInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: TakerApprovalUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: TakerApprovalCreateWithoutOwnerInput;
}
