import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyMangroveInputEnvelope } from "../inputs/TakerApprovalCreateManyMangroveInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutMangroveInput } from "../inputs/TakerApprovalCreateOrConnectWithoutMangroveInput";
import { TakerApprovalCreateWithoutMangroveInput } from "../inputs/TakerApprovalCreateWithoutMangroveInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateNestedManyWithoutMangroveInput", {
  isAbstract: true
})
export class TakerApprovalCreateNestedManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManyMangroveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  connect?: TakerApprovalWhereUniqueInput[] | undefined;
}
