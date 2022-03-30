import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyOutboundTokenInputEnvelope } from "../inputs/OfferListCreateManyOutboundTokenInputEnvelope";
import { OfferListCreateOrConnectWithoutOutboundTokenInput } from "../inputs/OfferListCreateOrConnectWithoutOutboundTokenInput";
import { OfferListCreateWithoutOutboundTokenInput } from "../inputs/OfferListCreateWithoutOutboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateNestedManyWithoutOutboundTokenInput", {
  isAbstract: true
})
export class OfferListCreateNestedManyWithoutOutboundTokenInput {
  @TypeGraphQL.Field(_type => [OfferListCreateWithoutOutboundTokenInput], {
    nullable: true
  })
  create?: OfferListCreateWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListCreateOrConnectWithoutOutboundTokenInput], {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutOutboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateManyOutboundTokenInputEnvelope, {
    nullable: true
  })
  createMany?: OfferListCreateManyOutboundTokenInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput[] | undefined;
}
