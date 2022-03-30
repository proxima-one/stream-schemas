import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListScalarWhereInput } from "../inputs/OfferListScalarWhereInput";
import { OfferListUpdateManyMutationInput } from "../inputs/OfferListUpdateManyMutationInput";

@TypeGraphQL.InputType("OfferListUpdateManyWithWhereWithoutOutboundTokenInput", {
  isAbstract: true
})
export class OfferListUpdateManyWithWhereWithoutOutboundTokenInput {
  @TypeGraphQL.Field(_type => OfferListScalarWhereInput, {
    nullable: false
  })
  where!: OfferListScalarWhereInput;

  @TypeGraphQL.Field(_type => OfferListUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfferListUpdateManyMutationInput;
}
