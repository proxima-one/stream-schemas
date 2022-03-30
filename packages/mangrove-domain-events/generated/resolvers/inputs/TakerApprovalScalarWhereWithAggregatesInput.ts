import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TakerApprovalScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TakerApprovalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TakerApprovalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TakerApprovalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TakerApprovalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mangroveId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  offerListId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  spenderId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  value?: StringWithAggregatesFilter | undefined;
}
