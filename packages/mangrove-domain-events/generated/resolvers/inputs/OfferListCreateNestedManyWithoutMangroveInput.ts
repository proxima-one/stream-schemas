import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyMangroveInputEnvelope } from "../inputs/OfferListCreateManyMangroveInputEnvelope";
import { OfferListCreateOrConnectWithoutMangroveInput } from "../inputs/OfferListCreateOrConnectWithoutMangroveInput";
import { OfferListCreateWithoutMangroveInput } from "../inputs/OfferListCreateWithoutMangroveInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateNestedManyWithoutMangroveInput", {
  isAbstract: true
})
export class OfferListCreateNestedManyWithoutMangroveInput {
  @TypeGraphQL.Field(_type => [OfferListCreateWithoutMangroveInput], {
    nullable: true
  })
  create?: OfferListCreateWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListCreateOrConnectWithoutMangroveInput], {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutMangroveInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateManyMangroveInputEnvelope, {
    nullable: true
  })
  createMany?: OfferListCreateManyMangroveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput[] | undefined;
}
