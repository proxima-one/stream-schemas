import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyMakerInput } from "../inputs/OfferCreateManyMakerInput";

@TypeGraphQL.InputType("OfferCreateManyMakerInputEnvelope", {
  isAbstract: true
})
export class OfferCreateManyMakerInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferCreateManyMakerInput], {
    nullable: false
  })
  data!: OfferCreateManyMakerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
