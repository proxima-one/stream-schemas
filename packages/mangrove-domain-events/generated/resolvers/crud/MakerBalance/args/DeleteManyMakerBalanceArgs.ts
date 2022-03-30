import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceWhereInput } from "../../../inputs/MakerBalanceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  where?: MakerBalanceWhereInput | undefined;
}
