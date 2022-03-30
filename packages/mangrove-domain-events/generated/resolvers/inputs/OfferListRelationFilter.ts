import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListWhereInput } from "../inputs/OfferListWhereInput";

@TypeGraphQL.InputType("OfferListRelationFilter", {
  isAbstract: true
})
export class OfferListRelationFilter {
  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  is?: OfferListWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  isNot?: OfferListWhereInput | undefined;
}
