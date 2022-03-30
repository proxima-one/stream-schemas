import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutMakerInput } from "../inputs/OfferCreateWithoutMakerInput";
import { OfferUpdateWithoutMakerInput } from "../inputs/OfferUpdateWithoutMakerInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpsertWithWhereUniqueWithoutMakerInput", {
  isAbstract: true
})
export class OfferUpsertWithWhereUniqueWithoutMakerInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutMakerInput, {
    nullable: false
  })
  update!: OfferUpdateWithoutMakerInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutMakerInput, {
    nullable: false
  })
  create!: OfferCreateWithoutMakerInput;
}
