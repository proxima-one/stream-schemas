import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferScalarWhereInput } from "../inputs/OfferScalarWhereInput";
import { OfferUpdateManyMutationInput } from "../inputs/OfferUpdateManyMutationInput";

@TypeGraphQL.InputType("OfferUpdateManyWithWhereWithoutOfferListInput", {
  isAbstract: true
})
export class OfferUpdateManyWithWhereWithoutOfferListInput {
  @TypeGraphQL.Field(_type => OfferScalarWhereInput, {
    nullable: false
  })
  where!: OfferScalarWhereInput;

  @TypeGraphQL.Field(_type => OfferUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfferUpdateManyMutationInput;
}
