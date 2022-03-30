import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalUpdateInput } from "../../../inputs/TakerApprovalUpdateInput";
import { TakerApprovalWhereUniqueInput } from "../../../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalUpdateInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateInput;

  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;
}
