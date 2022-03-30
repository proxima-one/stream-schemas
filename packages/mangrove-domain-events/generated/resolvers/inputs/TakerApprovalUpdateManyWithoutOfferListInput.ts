import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyOfferListInputEnvelope } from "../inputs/TakerApprovalCreateManyOfferListInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutOfferListInput } from "../inputs/TakerApprovalCreateOrConnectWithoutOfferListInput";
import { TakerApprovalCreateWithoutOfferListInput } from "../inputs/TakerApprovalCreateWithoutOfferListInput";
import { TakerApprovalScalarWhereInput } from "../inputs/TakerApprovalScalarWhereInput";
import { TakerApprovalUpdateManyWithWhereWithoutOfferListInput } from "../inputs/TakerApprovalUpdateManyWithWhereWithoutOfferListInput";
import { TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput } from "../inputs/TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput";
import { TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput } from "../inputs/TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalUpdateManyWithoutOfferListInput", {
  isAbstract: true
})
export class TakerApprovalUpdateManyWithoutOfferListInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutOfferListInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutOfferListInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput], {
    nullable: true
  })
  upsert?: TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManyOfferListInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManyOfferListInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput], {
    nullable: true
  })
  update?: TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalUpdateManyWithWhereWithoutOfferListInput], {
    nullable: true
  })
  updateMany?: TakerApprovalUpdateManyWithWhereWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TakerApprovalScalarWhereInput[] | undefined;
}
