import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyMangroveInputEnvelope } from "../inputs/TakerApprovalCreateManyMangroveInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutMangroveInput } from "../inputs/TakerApprovalCreateOrConnectWithoutMangroveInput";
import { TakerApprovalCreateWithoutMangroveInput } from "../inputs/TakerApprovalCreateWithoutMangroveInput";
import { TakerApprovalScalarWhereInput } from "../inputs/TakerApprovalScalarWhereInput";
import { TakerApprovalUpdateManyWithWhereWithoutMangroveInput } from "../inputs/TakerApprovalUpdateManyWithWhereWithoutMangroveInput";
import { TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput } from "../inputs/TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput";
import { TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput } from "../inputs/TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateManyWithoutMangroveInput", {
  isAbstract: true
})
export class TakerApprovalUpdateManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  upsert?: TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManyMangroveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  set?: TakerApprovalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TakerApprovalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  delete?: TakerApprovalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  connect?: TakerApprovalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput], {
    nullable: true
  })
  update?: TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateManyWithWhereWithoutMangroveInput], {
    nullable: true
  })
  updateMany?: TakerApprovalUpdateManyWithWhereWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TakerApprovalScalarWhereInput[] | undefined;
}
