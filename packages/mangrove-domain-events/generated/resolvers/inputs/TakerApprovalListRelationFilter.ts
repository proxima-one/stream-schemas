import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalWhereInput } from "../inputs/TakerApprovalWhereInput";

@TypeGraphQL.InputType("TakerApprovalListRelationFilter", {
  isAbstract: true
})
export class TakerApprovalListRelationFilter {
  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  every?: TakerApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  some?: TakerApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalWhereInput, {
    nullable: true
  })
  none?: TakerApprovalWhereInput | undefined;
}
