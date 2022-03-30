import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TakenOfferWhereInput", {
  isAbstract: true
})
export class TakenOfferWhereInput {
  @TypeGraphQL.Field(_type => [TakenOfferWhereInput], {
    nullable: true
  })
  AND?: TakenOfferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereInput], {
    nullable: true
  })
  OR?: TakenOfferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereInput], {
    nullable: true
  })
  NOT?: TakenOfferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orderId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  takerWants?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  takerWantsNumber?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  takerGives?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  takerGivesNumber?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  takerPaysPrice?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  makerPaysPrice?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  posthookFailed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  failReason?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;
}
