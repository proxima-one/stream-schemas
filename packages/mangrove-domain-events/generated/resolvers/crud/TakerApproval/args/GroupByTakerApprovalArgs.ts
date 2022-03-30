import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TakerApprovalOrderByWithAggregationInput } from "../../../inputs/TakerApprovalOrderByWithAggregationInput";
import { TakerApprovalScalarWhereWithAggregatesInput } from "../../../inputs/TakerApprovalScalarWhereWithAggregatesInput";
import { TakerApprovalWhereInput } from "../../../inputs/TakerApprovalWhereInput";
import { TakerApprovalScalarFieldEnum } from "../../../../enums/TakerApprovalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTakerApprovalArgs {
  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  where?: TakerApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TakerApprovalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "mangroveId" | "offerListId" | "ownerId" | "spenderId" | "value">;

  @TypeGraphQL.Field(_type => TakerApprovalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TakerApprovalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
