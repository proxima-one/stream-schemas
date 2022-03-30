import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { MangroveRelationFilter } from "../inputs/MangroveRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MakerBalanceWhereInput", {
  isAbstract: true
})
export class MakerBalanceWhereInput {
  @TypeGraphQL.Field(_type => [MakerBalanceWhereInput], {
    nullable: true
  })
  AND?: MakerBalanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereInput], {
    nullable: true
  })
  OR?: MakerBalanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceWhereInput], {
    nullable: true
  })
  NOT?: MakerBalanceWhereInput[] | undefined;

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
  makerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  balance?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MangroveRelationFilter, {
    nullable: true
  })
  mangrove?: MangroveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AccountRelationFilter, {
    nullable: true
  })
  maker?: AccountRelationFilter | undefined;
}
