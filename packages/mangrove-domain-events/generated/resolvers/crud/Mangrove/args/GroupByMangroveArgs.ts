import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveOrderByWithAggregationInput } from "../../../inputs/MangroveOrderByWithAggregationInput";
import { MangroveScalarWhereWithAggregatesInput } from "../../../inputs/MangroveScalarWhereWithAggregatesInput";
import { MangroveWhereInput } from "../../../inputs/MangroveWhereInput";
import { MangroveScalarFieldEnum } from "../../../../enums/MangroveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  where?: MangroveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MangroveOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MangroveOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "chainId" | "address" | "governance" | "monitor" | "vault" | "useOracle" | "notify" | "gasmax" | "gasprice" | "dead">;

  @TypeGraphQL.Field(_type => MangroveScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MangroveScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
