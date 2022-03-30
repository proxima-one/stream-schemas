import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferCreateManyOrderInput } from "../inputs/TakenOfferCreateManyOrderInput";

@TypeGraphQL.InputType("TakenOfferCreateManyOrderInputEnvelope", {
  isAbstract: true
})
export class TakenOfferCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [TakenOfferCreateManyOrderInput], {
    nullable: false
  })
  data!: TakenOfferCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
