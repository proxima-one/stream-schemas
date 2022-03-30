import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceCreateInput } from "../../../inputs/MakerBalanceCreateInput";
import { MakerBalanceUpdateInput } from "../../../inputs/MakerBalanceUpdateInput";
import { MakerBalanceWhereUniqueInput } from "../../../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceCreateInput, {
    nullable: false
  })
  create!: MakerBalanceCreateInput;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateInput, {
    nullable: false
  })
  update!: MakerBalanceUpdateInput;
}
