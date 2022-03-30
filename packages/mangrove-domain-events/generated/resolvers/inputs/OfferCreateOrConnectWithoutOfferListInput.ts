import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutOfferListInput } from "../inputs/OfferCreateWithoutOfferListInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateOrConnectWithoutOfferListInput", {
  isAbstract: true
})
export class OfferCreateOrConnectWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutOfferListInput, {
    nullable: false
  })
  create!: OfferCreateWithoutOfferListInput;
}
