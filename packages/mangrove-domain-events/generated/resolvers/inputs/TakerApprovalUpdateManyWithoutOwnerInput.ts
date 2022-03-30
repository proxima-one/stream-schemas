import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyOwnerInputEnvelope } from "../inputs/TakerApprovalCreateManyOwnerInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutOwnerInput } from "../inputs/TakerApprovalCreateOrConnectWithoutOwnerInput";
import { TakerApprovalCreateWithoutOwnerInput } from "../inputs/TakerApprovalCreateWithoutOwnerInput";
import { TakerApprovalScalarWhereInput } from "../inputs/TakerApprovalScalarWhereInput";
import { TakerApprovalUpdateManyWithWhereWithoutOwnerInput } from "../inputs/TakerApprovalUpdateManyWithWhereWithoutOwnerInput";
import { TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput";
import { TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateManyWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManyOwnerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: TakerApprovalUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TakerApprovalScalarWhereInput[] | undefined;
}
