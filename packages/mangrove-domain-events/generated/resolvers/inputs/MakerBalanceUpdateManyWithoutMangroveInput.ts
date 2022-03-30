import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateManyMangroveInputEnvelope } from "../inputs/MakerBalanceCreateManyMangroveInputEnvelope";
import { MakerBalanceCreateOrConnectWithoutMangroveInput } from "../inputs/MakerBalanceCreateOrConnectWithoutMangroveInput";
import { MakerBalanceCreateWithoutMangroveInput } from "../inputs/MakerBalanceCreateWithoutMangroveInput";
import { MakerBalanceScalarWhereInput } from "../inputs/MakerBalanceScalarWhereInput";
import { MakerBalanceUpdateManyWithWhereWithoutMangroveInput } from "../inputs/MakerBalanceUpdateManyWithWhereWithoutMangroveInput";
import { MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput } from "../inputs/MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput";
import { MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput } from "../inputs/MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput";
import { MakerBalanceWhereUniqueInput } from "../inputs/MakerBalanceWhereUniqueInput";

@TypeGraphQL.InputType("MakerBalanceUpdateManyWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceUpdateManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: MakerBalanceCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: MakerBalanceCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  upsert?: MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: MakerBalanceCreateManyMangroveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  update?: MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceUpdateManyWithWhereWithoutMangroveInput], {
    nullable: true
  })
  updateMany?: MakerBalanceUpdateManyWithWhereWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MakerBalanceScalarWhereInput[] | undefined;
}
