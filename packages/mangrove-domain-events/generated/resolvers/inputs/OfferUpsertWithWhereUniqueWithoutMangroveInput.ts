import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutMangroveInput } from "../inputs/OfferCreateWithoutMangroveInput";
import { OfferUpdateWithoutMangroveInput } from "../inputs/OfferUpdateWithoutMangroveInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpsertWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class OfferUpsertWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutMangroveInput, {
    nullable: false
  })
  update!: OfferUpdateWithoutMangroveInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: OfferCreateWithoutMangroveInput;
}
