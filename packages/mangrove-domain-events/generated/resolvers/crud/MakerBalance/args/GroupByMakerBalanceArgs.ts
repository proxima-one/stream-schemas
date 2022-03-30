import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceOrderByWithAggregationInput } from "../../../inputs/MakerBalanceOrderByWithAggregationInput";
import { MakerBalanceScalarWhereWithAggregatesInput } from "../../../inputs/MakerBalanceScalarWhereWithAggregatesInput";
import { MakerBalanceWhereInput } from "../../../inputs/MakerBalanceWhereInput";
import { MakerBalanceScalarFieldEnum } from "../../../../enums/MakerBalanceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  where?: MakerBalanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MakerBalanceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "mangroveId" | "makerId" | "balance">;

  @TypeGraphQL.Field(_type => MakerBalanceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MakerBalanceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
