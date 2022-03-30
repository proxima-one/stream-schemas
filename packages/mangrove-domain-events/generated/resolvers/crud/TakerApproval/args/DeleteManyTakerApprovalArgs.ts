import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalWhereInput } from "../../../inputs/TakerApprovalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  where?: TakerApprovalWhereInput | undefined;
}
