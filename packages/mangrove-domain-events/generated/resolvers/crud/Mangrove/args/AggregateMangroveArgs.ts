import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MangroveOrderByWithRelationInput } from "../../../inputs/MangroveOrderByWithRelationInput";
import { MangroveWhereInput } from "../../../inputs/MangroveWhereInput";
import { MangroveWhereUniqueInput } from "../../../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMangroveArgs {
  @TypeGraphQL.Field(_type => MangroveWhereInput, {
    nullable: true
  })
  where?: MangroveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MangroveOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MangroveOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  cursor?: MangroveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
