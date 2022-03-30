import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateManyMakerInputEnvelope } from "../inputs/MakerBalanceCreateManyMakerInputEnvelope";
import { MakerBalanceCreateOrConnectWithoutMakerInput } from "../inputs/MakerBalanceCreateOrConnectWithoutMakerInput";
import { MakerBalanceCreateWithoutMakerInput } from "../inputs/MakerBalanceCreateWithoutMakerInput";
import { MakerBalanceScalarWhereInput } from "../inputs/MakerBalanceScalarWhereInput";
import { MakerBalanceUpdateManyWithWhereWithoutMakerInput } from "../inputs/MakerBalanceUpdateManyWithWhereWithoutMakerInput";
import { MakerBalanceUpdateWithWhereUniqueWithoutMakerInput } from "../inputs/MakerBalanceUpdateWithWhereUniqueWithoutMakerInput";
import { MakerBalanceUpsertWithWhereUniqueWithoutMakerInput } from "../inputs/MakerBalanceUpsertWithWhereUniqueWithoutMakerInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceUpdateManyWithoutMakerInput", {
  isAbstract: true
})
export class MakerBalanceUpdateManyWithoutMakerInput {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateWithoutMakerInput], {
    nullable: true
  })
  create?: MakerBalanceCreateWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceCreateOrConnectWithoutMakerInput], {
    nullable: true
  })
  connectOrCreate?: MakerBalanceCreateOrConnectWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceUpsertWithWhereUniqueWithoutMakerInput], {
    nullable: true
  })
  upsert?: MakerBalanceUpsertWithWhereUniqueWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCreateManyMakerInputEnvelope, {
    nullable: true
  })
  createMany?: MakerBalanceCreateManyMakerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereUniqueInput], {
    nullable: true
  })
  set?: MakerBalanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MakerBalanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereUniqueInput], {
    nullable: true
  })
  delete?: MakerBalanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereUniqueInput], {
    nullable: true
  })
  connect?: MakerBalanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceUpdateWithWhereUniqueWithoutMakerInput], {
    nullable: true
  })
  update?: MakerBalanceUpdateWithWhereUniqueWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceUpdateManyWithWhereWithoutMakerInput], {
    nullable: true
  })
  updateMany?: MakerBalanceUpdateManyWithWhereWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MakerBalanceScalarWhereInput[] | undefined;
}
