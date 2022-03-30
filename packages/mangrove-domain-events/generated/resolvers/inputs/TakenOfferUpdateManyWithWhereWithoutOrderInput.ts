import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferScalarWhereInput } from "../inputs/TakenOfferScalarWhereInput";
import { TakenOfferUpdateManyMutationInput } from "../inputs/TakenOfferUpdateManyMutationInput";

@TypeGraphQL.InputType("TakenOfferUpdateManyWithWhereWithoutOrderInput", {
  isAbstract: true
})
export class TakenOfferUpdateManyWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => TakenOfferScalarWhereInput, {
    nullable: false
  })
  where!: TakenOfferScalarWhereInput;

  @TypeGraphQL.Field(_type => TakenOfferUpdateManyMutationInput, {
    nullable: false
  })
  data!: TakenOfferUpdateManyMutationInput;
}
