import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceOrderByWithRelationInput } from "../../../inputs/MakerBalanceOrderByWithRelationInput";
import { MakerBalanceWhereInput } from "../../../inputs/MakerBalanceWhereInput";
import { MakerBalanceWhereUniqueInput } from "../../../inputs/MakerBalanceWhereUniqueInput";
import { MakerBalanceScalarFieldEnum } from "../../../../enums/MakerBalanceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MangroveMakerBalancesArgs {
  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  where?: MakerBalanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MakerBalanceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: true
  })
  cursor?: MakerBalanceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "mangroveId" | "makerId" | "balance"> | undefined;
}
