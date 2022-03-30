import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalUpdateManyMutationInput } from "../../../inputs/TakerApprovalUpdateManyMutationInput";
import { TakerApprovalWhereInput } from "../../../inputs/TakerApprovalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalUpdateManyMutationInput, {
    nullable: false
  })
  data!: TakerApprovalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  where?: TakerApprovalWhereInput | undefined;
}
