import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveUpdateManyMutationInput } from "../../../inputs/MangroveUpdateManyMutationInput";
import { MangroveWhereInput } from "../../../inputs/MangroveWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveUpdateManyMutationInput, {
    nullable: false
  })
  data!: MangroveUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  where?: MangroveWhereInput | undefined;
}
