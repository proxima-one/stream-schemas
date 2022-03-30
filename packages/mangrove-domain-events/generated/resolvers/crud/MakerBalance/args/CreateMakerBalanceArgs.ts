import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceCreateInput } from "../../../inputs/MakerBalanceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceCreateInput, {
    nullable: false
  })
  data!: MakerBalanceCreateInput;
}
