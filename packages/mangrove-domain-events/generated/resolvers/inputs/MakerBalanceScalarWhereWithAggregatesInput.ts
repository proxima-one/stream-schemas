import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MakerBalanceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MakerBalanceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MakerBalanceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MakerBalanceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MakerBalanceScalarWhereWithAggregatesInput[] | undefined;

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
  makerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  balance?: StringWithAggregatesFilter | undefined;
}
