import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceUpdateManyMutationInput } from "../../../inputs/MakerBalanceUpdateManyMutationInput";
import { MakerBalanceWhereInput } from "../../../inputs/MakerBalanceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMakerBalanceArgs {
  @TypeGraphQL.Field(_type => MakerBalanceUpdateManyMutationInput, {
    nullable: false
  })
  data!: MakerBalanceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  where?: MakerBalanceWhereInput | undefined;
}
