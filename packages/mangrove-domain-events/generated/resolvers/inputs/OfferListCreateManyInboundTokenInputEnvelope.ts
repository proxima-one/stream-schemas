import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyInboundTokenInput } from "../inputs/OfferListCreateManyInboundTokenInput";

@TypeGraphQL.InputType("OfferListCreateManyInboundTokenInputEnvelope", {
  isAbstract: true
})
export class OfferListCreateManyInboundTokenInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferListCreateManyInboundTokenInput], {
    nullable: false
  })
  data!: OfferListCreateManyInboundTokenInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
