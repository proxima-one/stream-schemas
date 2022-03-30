import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveUpdateInput } from "../../../inputs/MangroveUpdateInput";
import { MangroveWhereUniqueInput } from "../../../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveUpdateInput, {
    nullable: false
  })
  data!: MangroveUpdateInput;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;
}
