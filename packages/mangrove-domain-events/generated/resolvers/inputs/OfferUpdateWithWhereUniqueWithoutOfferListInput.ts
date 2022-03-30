import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferUpdateWithoutOfferListInput } from "../inputs/OfferUpdateWithoutOfferListInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateWithWhereUniqueWithoutOfferListInput", {
  isAbstract: true
})
export class OfferUpdateWithWhereUniqueWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutOfferListInput, {
    nullable: false
  })
  data!: OfferUpdateWithoutOfferListInput;
}
