import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManySpenderInputEnvelope } from "../inputs/TakerApprovalCreateManySpenderInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutSpenderInput } from "../inputs/TakerApprovalCreateOrConnectWithoutSpenderInput";
import { TakerApprovalCreateWithoutSpenderInput } from "../inputs/TakerApprovalCreateWithoutSpenderInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateNestedManyWithoutSpenderInput", {
  isAbstract: true
})
export class TakerApprovalCreateNestedManyWithoutSpenderInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutSpenderInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutSpenderInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutSpenderInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManySpenderInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManySpenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  connect?: TakerApprovalWhereUniqueInput[] | undefined;
}
