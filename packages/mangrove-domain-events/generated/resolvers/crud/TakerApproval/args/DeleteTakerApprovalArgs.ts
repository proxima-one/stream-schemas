import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalWhereUniqueInput } from "../../../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: TakerApprovalWhereUniqueInput;
}
