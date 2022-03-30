import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveCreateManyInput } from "../../../inputs/MangroveCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMangroveArgs {
  @TypeGraphQL.Field(_type => [MangroveCreateManyInput], {
    nullable: false
  })
  data!: MangroveCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
