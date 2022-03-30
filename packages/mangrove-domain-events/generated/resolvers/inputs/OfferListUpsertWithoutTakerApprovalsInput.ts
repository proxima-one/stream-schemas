import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutTakerApprovalsInput } from "../inputs/OfferListCreateWithoutTakerApprovalsInput";
import { OfferListUpdateWithoutTakerApprovalsInput } from "../inputs/OfferListUpdateWithoutTakerApprovalsInput";

@TypeGraphQL.InputType("OfferListUpsertWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class OfferListUpsertWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => OfferListUpdateWithoutTakerApprovalsInput, {
    nullable: false
  })
  update!: OfferListUpdateWithoutTakerApprovalsInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutTakerApprovalsInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutTakerApprovalsInput;
}
