import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveOrderByRelationAggregateInput } from "../inputs/MangroveOrderByRelationAggregateInput";
import { TokenOrderByRelationAggregateInput } from "../inputs/TokenOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChainOrderByWithRelationInput", {
  isAbstract: true
})
export class ChainOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MangroveOrderByRelationAggregateInput, {
    nullable: true
  })
  mangroves?: MangroveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TokenOrderByRelationAggregateInput, {
    nullable: true
  })
  tokens?: TokenOrderByRelationAggregateInput | undefined;
}
