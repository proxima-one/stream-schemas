import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutMangroveInput } from "../inputs/OfferCreateWithoutMangroveInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateOrConnectWithoutMangroveInput", {
  isAbstract: true
})
export class OfferCreateOrConnectWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: OfferCreateWithoutMangroveInput;
}
