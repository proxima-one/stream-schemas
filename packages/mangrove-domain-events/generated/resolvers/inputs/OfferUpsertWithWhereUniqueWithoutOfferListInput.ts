import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutOfferListInput } from "../inputs/OfferCreateWithoutOfferListInput";
import { OfferUpdateWithoutOfferListInput } from "../inputs/OfferUpdateWithoutOfferListInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpsertWithWhereUniqueWithoutOfferListInput", {
  isAbstract: true
})
export class OfferUpsertWithWhereUniqueWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutOfferListInput, {
    nullable: false
  })
  update!: OfferUpdateWithoutOfferListInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutOfferListInput, {
    nullable: false
  })
  create!: OfferCreateWithoutOfferListInput;
}
