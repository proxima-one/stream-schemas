import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TokenScalarWhereInput", {
  isAbstract: true
})
export class TokenScalarWhereInput {
  @TypeGraphQL.Field(_type => [TokenScalarWhereInput], {
    nullable: true
  })
  AND?: TokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereInput], {
    nullable: true
  })
  OR?: TokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereInput], {
    nullable: true
  })
  NOT?: TokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chainId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  symbol?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  decimals?: IntFilter | undefined;
}
