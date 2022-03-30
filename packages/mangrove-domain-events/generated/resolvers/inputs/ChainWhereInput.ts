import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MangroveListRelationFilter } from "../inputs/MangroveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TokenListRelationFilter } from "../inputs/TokenListRelationFilter";

@TypeGraphQL.InputType("ChainWhereInput", {
  isAbstract: true
})
export class ChainWhereInput {
  @TypeGraphQL.Field(_type => [ChainWhereInput], {
    nullable: true
  })
  AND?: ChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainWhereInput], {
    nullable: true
  })
  OR?: ChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainWhereInput], {
    nullable: true
  })
  NOT?: ChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MangroveListRelationFilter, {
    nullable: true
  })
  mangroves?: MangroveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TokenListRelationFilter, {
    nullable: true
  })
  tokens?: TokenListRelationFilter | undefined;
}
