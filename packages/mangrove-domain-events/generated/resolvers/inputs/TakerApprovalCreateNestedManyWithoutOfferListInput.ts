import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyOfferListInputEnvelope } from "../inputs/TakerApprovalCreateManyOfferListInputEnvelope";
import { TakerApprovalCreateOrConnectWithoutOfferListInput } from "../inputs/TakerApprovalCreateOrConnectWithoutOfferListInput";
import { TakerApprovalCreateWithoutOfferListInput } from "../inputs/TakerApprovalCreateWithoutOfferListInput";
import { TakerApprovalWhereUniqueInput } from "../inputs/TakerApprovalWhereUniqueInput";

@TypeGraphQL.InputType("TakerApprovalCreateNestedManyWithoutOfferListInput", {
  isAbstract: true
})
export class TakerApprovalCreateNestedManyWithoutOfferListInput {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateWithoutOfferListInput], {
    nullable: true
  })
  create?: TakerApprovalCreateWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalCreateOrConnectWithoutOfferListInput], {
    nullable: true
  })
  connectOrCreate?: TakerApprovalCreateOrConnectWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateManyOfferListInputEnvelope, {
    nullable: true
  })
  createMany?: TakerApprovalCreateManyOfferListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereUniqueInput], {
    nullable: true
  })
  connect?: TakerApprovalWhereUniqueInput[] | undefined;
}
