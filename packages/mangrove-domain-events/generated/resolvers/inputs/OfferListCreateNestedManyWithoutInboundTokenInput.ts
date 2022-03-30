import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateManyInboundTokenInputEnvelope } from "../inputs/OfferListCreateManyInboundTokenInputEnvelope";
import { OfferListCreateOrConnectWithoutInboundTokenInput } from "../inputs/OfferListCreateOrConnectWithoutInboundTokenInput";
import { OfferListCreateWithoutInboundTokenInput } from "../inputs/OfferListCreateWithoutInboundTokenInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateNestedManyWithoutInboundTokenInput", {
  isAbstract: true
})
export class OfferListCreateNestedManyWithoutInboundTokenInput {
  @TypeGraphQL.Field(_type => [OfferListCreateWithoutInboundTokenInput], {
    nullable: true
  })
  create?: OfferListCreateWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferListCreateOrConnectWithoutInboundTokenInput], {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutInboundTokenInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateManyInboundTokenInputEnvelope, {
    nullable: true
  })
  createMany?: OfferListCreateManyInboundTokenInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferListWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput[] | undefined;
}
