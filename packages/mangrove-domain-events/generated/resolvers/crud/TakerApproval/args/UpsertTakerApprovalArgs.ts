import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalCreateInput } from "../../../inputs/TakerApprovalCreateInput";
import { TakerApprovalUpdateInput } from "../../../inputs/TakerApprovalUpdateInput";
import { TakerApprovalWhereUniqueInput } from "../../../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakerApprovalCreateInput, {
    nullable: false
  })
  create!: TakerApprovalCreateInput;

  @TypeGraphQL.Field(_type => TakerApprovalUpdateInput, {
    nullable: false
  })
  update!: TakerApprovalUpdateInput;
}
