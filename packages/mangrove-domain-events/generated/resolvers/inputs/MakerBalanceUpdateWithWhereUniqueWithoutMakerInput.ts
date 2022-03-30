import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceUpdateWithoutMakerInput } from "../inputs/MakerBalanceUpdateWithoutMakerInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceUpdateWithWhereUniqueWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceUpdateWithWhereUniqueWithoutMakerInput {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateWithoutMakerInput, {
    nullable: false
  })
  data!: MakerBalanceUpdateWithoutMakerInput;
}
