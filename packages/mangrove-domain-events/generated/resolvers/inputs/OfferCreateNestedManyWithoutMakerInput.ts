import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyMakerInputEnvelope } from "../inputs/OfferCreateManyMakerInputEnvelope";
import { OfferCreateOrConnectWithoutMakerInput } from "../inputs/OfferCreateOrConnectWithoutMakerInput";
import { OfferCreateWithoutMakerInput } from "../inputs/OfferCreateWithoutMakerInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateNestedManyWithoutMakerInput", {
  isAbstract: true
})
export class OfferCreateNestedManyWithoutMakerInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutMakerInput], {
    nullable: true
  })
  create?: OfferCreateWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutMakerInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutMakerInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyMakerInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyMakerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferWhereUniqueInput[] | undefined;
}
