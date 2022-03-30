import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateWithoutTakerApprovalsInput } from "../inputs/OfferListCreateWithoutTakerApprovalsInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateOrConnectWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class OfferListCreateOrConnectWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: false
  })
  where!: OfferListWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferListCreateWithoutTakerApprovalsInput, {
    nullable: false
  })
  create!: OfferListCreateWithoutTakerApprovalsInput;
}
