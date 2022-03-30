import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutOrdersInput } from "../inputs/OfferListCreateWithoutOrdersInput";
import { OfferListUpdateWithoutOrdersInput } from "../inputs/OfferListUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("OfferListUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class OfferListUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => OfferListUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: OfferListUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutOrdersInput;
}
