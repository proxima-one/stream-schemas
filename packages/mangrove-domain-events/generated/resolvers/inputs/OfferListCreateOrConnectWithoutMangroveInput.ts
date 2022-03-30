import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutMangroveInput } from "../inputs/OfferListCreateWithoutMangroveInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateOrConnectWithoutMangroveInput", {
  isAbstract: true
})
export class OfferListCreateOrConnectWithoutMangroveInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutMangroveInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutMangroveInput;
}
