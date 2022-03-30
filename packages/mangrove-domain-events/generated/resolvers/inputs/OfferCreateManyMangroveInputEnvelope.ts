import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyMangroveInput } from "../inputs/OfferCreateManyMangroveInput";

@TypeGraphQL.InputType("OfferCreateManyMangroveInputEnvelope", {
  isAbstract: true
})
export class OfferCreateManyMangroveInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferCreateManyMangroveInput], {
    nullable: false
  })
  data!: OfferCreateManyMangroveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
