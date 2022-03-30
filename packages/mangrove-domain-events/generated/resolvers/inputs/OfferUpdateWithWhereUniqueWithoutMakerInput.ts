import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferUpdateWithoutMakerInput } from "../inputs/OfferUpdateWithoutMakerInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateWithWhereUniqueWithoutMakerInput", {
  isAbstract: true
})
export class OfferUpdateWithWhereUniqueWithoutMakerInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutMakerInput, {
    nullable: false
  })
  data!: OfferUpdateWithoutMakerInput;
}
