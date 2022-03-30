import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferCreateWithoutOrderInput } from "../inputs/TakenOfferCreateWithoutOrderInput";
import { TakenOfferUpdateWithoutOrderInput } from "../inputs/TakenOfferUpdateWithoutOrderInput";
import { TakenOfferWhereUniqueInput } from "../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.InputType("TakenOfferUpsertWithWhereUniqueWithoutOrderInput", {
  isAbstract: true
})
export class TakenOfferUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: false
  })
  where!: TakenOfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakenOfferUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: TakenOfferUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => TakenOfferCreateWithoutOrderInput, {
    nullable: false
  })
  create!: TakenOfferCreateWithoutOrderInput;
}
