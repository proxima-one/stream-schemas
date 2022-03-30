import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListWhereInput } from "../inputs/OfferListWhereInput";

@TypeGraphQL.InputType("OfferListListRelationFilter", {
  isAbstract: true
})
export class OfferListListRelationFilter {
  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  every?: OfferListWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  some?: OfferListWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereInput, {
    nullable: true
  })
  none?: OfferListWhereInput | undefined;
}
