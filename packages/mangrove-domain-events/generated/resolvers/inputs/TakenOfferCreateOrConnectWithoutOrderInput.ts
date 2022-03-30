import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferCreateWithoutOrderInput } from "../inputs/TakenOfferCreateWithoutOrderInput";
import { TakenOfferWhereUniqueInput } from "../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.InputType("TakenOfferCreateOrConnectWithoutOrderInput", {
  isAbstract: true
})
export class TakenOfferCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => TakenOfferWhereUniqueInput, {
    nullable: false
  })
  where!: TakenOfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TakenOfferCreateWithoutOrderInput, {
    nullable: false
  })
  create!: TakenOfferCreateWithoutOrderInput;
}
