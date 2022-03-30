import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakenOfferCreateManyOrderInputEnvelope } from "../inputs/TakenOfferCreateManyOrderInputEnvelope";
import { TakenOfferCreateOrConnectWithoutOrderInput } from "../inputs/TakenOfferCreateOrConnectWithoutOrderInput";
import { TakenOfferCreateWithoutOrderInput } from "../inputs/TakenOfferCreateWithoutOrderInput";
import { TakenOfferWhereUniqueInput } from "../inputs/TakenOfferWhereUniqueInput";

@TypeGraphQL.InputType("TakenOfferCreateNestedManyWithoutOrderInput", {
  isAbstract: true
})
export class TakenOfferCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [TakenOfferCreateWithoutOrderInput], {
    nullable: true
  })
  create?: TakenOfferCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: TakenOfferCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => TakenOfferCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: TakenOfferCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TakenOfferWhereUniqueInput], {
    nullable: true
  })
  connect?: TakenOfferWhereUniqueInput[] | undefined;
}
