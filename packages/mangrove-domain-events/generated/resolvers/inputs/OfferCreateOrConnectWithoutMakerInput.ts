import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutMakerInput } from "../inputs/OfferCreateWithoutMakerInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateOrConnectWithoutMakerInput", {
  isAbstract: true
})
export class OfferCreateOrConnectWithoutMakerInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutMakerInput, {
    nullable: false
  })
  create!: OfferCreateWithoutMakerInput;
}
