import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceUpdateWithoutMangroveInput } from "../inputs/MakerBalanceUpdateWithoutMangroveInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateWithoutMangroveInput, {
    nullable: false
  })
  data!: MakerBalanceUpdateWithoutMangroveInput;
}
