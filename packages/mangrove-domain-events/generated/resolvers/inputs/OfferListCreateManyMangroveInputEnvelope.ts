import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyMangroveInput } from "../inputs/OfferListCreateManyMangroveInput";

@TypeGraphQL.InputType("OfferListCreateManyMangroveInputEnvelope", {
  isAbstract: true
})
export class OfferListCreateManyMangroveInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferListCreateManyMangroveInput], {
    nullable: false
  })
  data!: OfferListCreateManyMangroveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
