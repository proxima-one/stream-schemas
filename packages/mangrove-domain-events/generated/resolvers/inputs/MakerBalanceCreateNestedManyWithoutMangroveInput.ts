import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateManyMangroveInputEnvelope } from "../inputs/MakerBalanceCreateManyMangroveInputEnvelope";
import { MakerBalanceCreateOrConnectWithoutMangroveInput } from "../inputs/MakerBalanceCreateOrConnectWithoutMangroveInput";
import { MakerBalanceCreateWithoutMangroveInput } from "../inputs/MakerBalanceCreateWithoutMangroveInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceCreateNestedManyWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceCreateNestedManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: MakerBalanceCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: MakerBalanceCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: MakerBalanceCreateManyMangroveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereUniqueInput], {
    nullable: true
  })
  connect?: MakerBalanceWhereUniqueInput[] | undefined;
}
