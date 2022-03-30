import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TakenOfferScalarWhereInput", {
  isAbstract: true
})
export class TakenOfferScalarWhereInput {
  @TypeGraphQL.Field(_type => [TakenOfferScalarWhereInput], {
    nullable: true
  })
  AND?: TakenOfferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferScalarWhereInput], {
    nullable: true
  })
  OR?: TakenOfferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferScalarWhereInput], {
    nullable: true
  })
  NOT?: TakenOfferScalarWhereInput[] | undefined;

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
}
