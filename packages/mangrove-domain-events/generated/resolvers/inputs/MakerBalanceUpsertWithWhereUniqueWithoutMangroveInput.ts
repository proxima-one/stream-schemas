import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateWithoutMangroveInput } from "../inputs/MakerBalanceCreateWithoutMangroveInput";
import { MakerBalanceUpdateWithoutMangroveInput } from "../inputs/MakerBalanceUpdateWithoutMangroveInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateWithoutMangroveInput, {
    nullable: false
  })
  update!: MakerBalanceUpdateWithoutMangroveInput;

  @TypeGraphQL.Field(_type => MakerBalanceCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: MakerBalanceCreateWithoutMangroveInput;
}
