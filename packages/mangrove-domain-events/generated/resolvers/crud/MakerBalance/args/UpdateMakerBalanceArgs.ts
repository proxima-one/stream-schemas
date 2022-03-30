import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceUpdateInput } from "../../../inputs/MakerBalanceUpdateInput";
import { MakerBalanceWhereUniqueInput } from "../../../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceUpdateInput, {
    nullable: false
  })
  data!: MakerBalanceUpdateInput;

  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;
}
