import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferUpdateWithoutOrderInput } from "../inputs/TakenOfferUpdateWithoutOrderInput";
import { TakenOfferWhereUniqueInput } from "../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.InputType("TakenOfferUpdateWithWhereUniqueWithoutOrderInput", {
  isAbstract: true
})
export class TakenOfferUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: false
  })
  where!: TakenOfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakenOfferUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: TakenOfferUpdateWithoutOrderInput;
}
