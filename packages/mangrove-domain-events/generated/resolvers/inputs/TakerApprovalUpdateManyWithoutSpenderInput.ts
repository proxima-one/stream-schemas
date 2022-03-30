import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManySpenderInputEnvelope } from "../inputs/TakerApprovalCreateManySpenderInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutSpenderInput } from "../inputs/TakerApprovalCreateOrConnectWithoutSpenderInput";
import { TakerApprovalCreateWithoutSpenderInput } from "../inputs/TakerApprovalCreateWithoutSpenderInput";
import { TakerApprovalScalarWhereInput } from "../inputs/TakerApprovalScalarWhereInput";
import { TakerApprovalUpdateManyWithWhereWithoutSpenderInput } from "../inputs/TakerApprovalUpdateManyWithWhereWithoutSpenderInput";
import { TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput } from "../inputs/TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput";
import { TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput } from "../inputs/TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateManyWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalUpdateManyWithoutSpenderInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutSpenderInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutSpenderInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput], {
    nullable: true
  })
  upsert?: TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManySpenderInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManySpenderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput], {
    nullable: true
  })
  update?: TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateManyWithWhereWithoutSpenderInput], {
    nullable: true
  })
  updateMany?: TakerApprovalUpdateManyWithWhereWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TakerApprovalScalarWhereInput[] | undefined;
}
