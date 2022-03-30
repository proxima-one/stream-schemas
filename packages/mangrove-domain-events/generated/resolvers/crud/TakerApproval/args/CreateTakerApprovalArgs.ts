import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalCreateInput } from "../../../inputs/TakerApprovalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalCreateInput, {
    nullable: false
  })
  data!: TakerApprovalCreateInput;
}
