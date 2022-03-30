import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByWithRelationInput } from "../inputs/AccountOrderByWithRelationInput";
import { MangroveOrderByWithRelationInput } from "../inputs/MangroveOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MakerBalanceOrderByWithRelationInput", {
  isAbstract: true
})
export class MakerBalanceOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mangroveId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  makerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  balance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MangroveOrderByWithRelationInput, {
    nullable: true
  })
  mangrove?: MangroveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByWithRelationInput, {
    nullable: true
  })
  maker?: AccountOrderByWithRelationInput | undefined;
}
