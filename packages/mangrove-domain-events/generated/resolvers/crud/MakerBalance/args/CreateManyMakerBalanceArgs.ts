import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakerBalanceCreateManyInput } from "../../../inputs/MakerBalanceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMakerBalanceArgs {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateManyInput], {
    nullable: false
  })
  data!: MakerBalanceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
