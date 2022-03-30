import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalOrderByWithRelationInput } from "../../../inputs/TakerApprovalOrderByWithRelationInput";
import { TakerApprovalWhereInput } from "../../../inputs/TakerApprovalWhereInput";
import { TakerApprovalWhereUniqueInput } from "../../../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  where?: TakerApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TakerApprovalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalWhereUniqueInput, {
    nullable: true
  })
  cursor?: TakerApprovalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
