import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyMangroveInputEnvelope } from "../inputs/OfferCreateManyMangroveInputEnvelope";
import { OfferCreateOrConnectWithoutMangroveInput } from "../inputs/OfferCreateOrConnectWithoutMangroveInput";
import { OfferCreateWithoutMangroveInput } from "../inputs/OfferCreateWithoutMangroveInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateNestedManyWithoutMangroveInput", {
  isAbstract: true
})
export class OfferCreateNestedManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: OfferCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyMangroveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferWhereUniqueInput[] | undefined;
}
