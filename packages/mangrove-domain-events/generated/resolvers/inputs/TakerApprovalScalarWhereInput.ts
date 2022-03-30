import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TakerApprovalScalarWhereInput", {
  isAbstract: true
})
export class TakerApprovalScalarWhereInput {
  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  AND?: TakerApprovalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  OR?: TakerApprovalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereInput], {
    nullable: true
  })
  NOT?: TakerApprovalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mangroveId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  offerListId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  spenderId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;
}
