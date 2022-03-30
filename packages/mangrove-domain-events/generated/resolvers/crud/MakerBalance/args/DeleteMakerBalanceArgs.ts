import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceWhereUniqueInput } from "../../../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;
}
