import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateManyMakerInputEnvelope } from "../inputs/MakerBalanceCreateManyMakerInputEnvelope";
import { MakerBalanceCreateOrConnectWithoutMakerInput } from "../inputs/MakerBalanceCreateOrConnectWithoutMakerInput";
import { MakerBalanceCreateWithoutMakerInput } from "../inputs/MakerBalanceCreateWithoutMakerInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceCreateNestedManyWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceCreateNestedManyWithoutMakerInput {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateWithoutMakerInput], {
    nullable: true
  })
  create?: MakerBalanceCreateWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceCreateOrConnectWithoutMakerInput], {
    nullable: true
  })
  connectOrCreate?: MakerBalanceCreateOrConnectWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCreateManyMakerInputEnvelope, {
    nullable: true
  })
  createMany?: MakerBalanceCreateManyMakerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereUniqueInput], {
    nullable: true
  })
  connect?: MakerBalanceWhereUniqueInput[] | undefined;
}
