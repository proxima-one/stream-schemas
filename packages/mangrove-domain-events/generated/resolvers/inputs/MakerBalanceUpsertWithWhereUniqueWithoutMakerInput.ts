import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateWithoutMakerInput } from "../inputs/MakerBalanceCreateWithoutMakerInput";
import { MakerBalanceUpdateWithoutMakerInput } from "../inputs/MakerBalanceUpdateWithoutMakerInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceUpsertWithWhereUniqueWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceUpsertWithWhereUniqueWithoutMakerInput {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateWithoutMakerInput, {
    nullable: false
  })
  update!: MakerBalanceUpdateWithoutMakerInput;

  @TypeGraphQL.Field(_type => MakerBalanceCreateWithoutMakerInput, {
    nullable: false
  })
  create!: MakerBalanceCreateWithoutMakerInput;
}
