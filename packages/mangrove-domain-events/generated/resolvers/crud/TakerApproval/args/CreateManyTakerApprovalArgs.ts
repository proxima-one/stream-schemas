import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalCreateManyInput } from "../../../inputs/TakerApprovalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTakerApprovalArgs {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateManyInput], {
    nullable: false
  })
  data!: TakerApprovalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
