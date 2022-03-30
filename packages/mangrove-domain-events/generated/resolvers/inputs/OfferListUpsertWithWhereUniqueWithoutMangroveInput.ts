import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutMangroveInput } from "../inputs/OfferListCreateWithoutMangroveInput";
import { OfferListUpdateWithoutMangroveInput } from "../inputs/OfferListUpdateWithoutMangroveInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpsertWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class OfferListUpsertWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutMangroveInput, {
    nullable: false
  })
  update!: OfferListUpdateWithoutMangroveInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutMangroveInput;
}
