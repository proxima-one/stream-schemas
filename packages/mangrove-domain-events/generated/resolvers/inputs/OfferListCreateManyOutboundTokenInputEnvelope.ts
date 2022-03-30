import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyOutboundTokenInput } from "../inputs/OfferListCreateManyOutboundTokenInput";

@TypeGraphQL.InputType("OfferListCreateManyOutboundTokenInputEnvelope", {
  isAbstract: true
})
export class OfferListCreateManyOutboundTokenInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferListCreateManyOutboundTokenInput], {
    nullable: false
  })
  data!: OfferListCreateManyOutboundTokenInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
