import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateWithoutMangroveInput } from "../inputs/MakerBalanceCreateWithoutMangroveInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceCreateOrConnectWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceCreateOrConnectWithoutMangroveInput {
  @TypeGraphQL.Field(_type => MakerBalanceWhereUniqueInput, {
    nullable: false
  })
  where!: MakerBalanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MakerBalanceCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: MakerBalanceCreateWithoutMangroveInput;
}
