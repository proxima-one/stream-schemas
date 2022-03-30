import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyOwnerInputEnvelope } from "../inputs/TakerApprovalCreateManyOwnerInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutOwnerInput } from "../inputs/TakerApprovalCreateOrConnectWithoutOwnerInput";
import { TakerApprovalCreateWithoutOwnerInput } from "../inputs/TakerApprovalCreateWithoutOwnerInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class TakerApprovalCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  connect?: TakerApprovalWhereUniqueInput[] | undefined;
}
