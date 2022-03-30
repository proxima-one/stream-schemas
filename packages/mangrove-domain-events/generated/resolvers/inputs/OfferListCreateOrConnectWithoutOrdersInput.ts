import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutOrdersInput } from "../inputs/OfferListCreateWithoutOrdersInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class OfferListCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutOrdersInput;
}
