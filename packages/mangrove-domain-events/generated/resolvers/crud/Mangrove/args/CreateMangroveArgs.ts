import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveCreateInput } from "../../../inputs/MangroveCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveCreateInput, {
    nullable: false
  })
  data!: MangroveCreateInput;
}
