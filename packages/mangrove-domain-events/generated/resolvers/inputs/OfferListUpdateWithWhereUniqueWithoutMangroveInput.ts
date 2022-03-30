import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListUpdateWithoutMangroveInput } from "../inputs/OfferListUpdateWithoutMangroveInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListUpdateWithWhereUniqueWithoutMangroveInput", {
  isAbstract: true
})
export class OfferListUpdateWithWhereUniqueWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListUpdateWithoutMangroveInput, {
    nullable: false
  })
  data!: OfferListUpdateWithoutMangroveInput;
}
