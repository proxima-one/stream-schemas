import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AccountScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AccountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;
}
