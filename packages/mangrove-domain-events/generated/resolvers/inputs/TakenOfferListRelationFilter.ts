import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferWhereInput } from "../inputs/TakenOfferWhereInput";

@TypeGraphQL.InputType("TakenOfferListRelationFilter", {
  isAbstract: true
})
export class TakenOfferListRelationFilter {
  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  every?: TakenOfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  some?: TakenOfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => TakenOfferWhereInput, {
    nullable: true
  })
  none?: TakenOfferWhereInput | undefined;
}
