import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveWhereUniqueInput } from "../../../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;
}
