import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveWhereInput } from "../../../inputs/MangroveWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  where?: MangroveWhereInput | undefined;
}
