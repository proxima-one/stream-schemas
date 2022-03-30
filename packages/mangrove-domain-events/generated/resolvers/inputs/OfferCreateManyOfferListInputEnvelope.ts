import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyOfferListInput } from "../inputs/OfferCreateManyOfferListInput";

@TypeGraphQL.InputType("OfferCreateManyOfferListInputEnvelope", {
  isAbstract: true
})
export class OfferCreateManyOfferListInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferCreateManyOfferListInput], {
    nullable: false
  })
  data!: OfferCreateManyOfferListInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
