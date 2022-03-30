import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateWithoutMakerInput } from "../inputs/MakerBalanceCreateWithoutMakerInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceCreateOrConnectWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceCreateOrConnectWithoutMakerInput {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceCreateWithoutMakerInput, {
    nullable: false
  })
  create!: MakerBalanceCreateWithoutMakerInput;
}
