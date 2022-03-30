import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MakerBalanceScalarWhereInput", {
  isAbstract: true
})
export class MakerBalanceScalarWhereInput {
  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereInput], {
    nullable: true
  })
  AND?: MakerBalanceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereInput], {
    nullable: true
  })
  OR?: MakerBalanceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MakerBalanceScalarWhereInput], {
    nullable: true
  })
  NOT?: MakerBalanceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mangroveId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  makerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  balance?: StringFilter | undefined;
}
