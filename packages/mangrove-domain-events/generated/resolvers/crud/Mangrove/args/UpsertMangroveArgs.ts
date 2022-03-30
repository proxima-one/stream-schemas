import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveCreateInput } from "../../../inputs/MangroveCreateInput";
import { MangroveUpdateInput } from "../../../inputs/MangroveUpdateInput";
import { MangroveWhereUniqueInput } from "../../../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveCreateInput, {
    nullable: false
  })
  create!: MangroveCreateInput;

  @TypeGraphQL.Field(_type => MangroveUpdateInput, {
    nullable: false
  })
  update!: MangroveUpdateInput;
}
