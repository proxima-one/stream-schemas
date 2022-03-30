import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceWhereInput } from "../inputs/MakerBalanceWhereInput";

@TypeGraphQL.InputType("MakerBalanceListRelationFilter", {
  isAbstract: true
})
export class MakerBalanceListRelationFilter {
  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  every?: MakerBalanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  some?: MakerBalanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceWhereInput, {
    nullable: true
  })
  none?: MakerBalanceWhereInput | undefined;
}
