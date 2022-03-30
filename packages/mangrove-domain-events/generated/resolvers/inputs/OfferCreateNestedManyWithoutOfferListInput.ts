import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyOfferListInputEnvelope } from "../inputs/OfferCreateManyOfferListInputEnvelope";
import { OfferCreateOrConnectWithoutOfferListInput } from "../inputs/OfferCreateOrConnectWithoutOfferListInput";
import { OfferCreateWithoutOfferListInput } from "../inputs/OfferCreateWithoutOfferListInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateNestedManyWithoutOfferListInput", {
  isAbstract: true
})
export class OfferCreateNestedManyWithoutOfferListInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutOfferListInput], {
    nullable: true
  })
  create?: OfferCreateWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutOfferListInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutOfferListInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyOfferListInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyOfferListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferWhereUniqueInput[] | undefined;
}
