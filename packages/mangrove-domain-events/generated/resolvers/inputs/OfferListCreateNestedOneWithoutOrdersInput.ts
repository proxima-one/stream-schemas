import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferListCreateOrConnectWithoutOrdersInput } from "../inputs/OfferListCreateOrConnectWithoutOrdersInput";
import { OfferListCreateWithoutOrdersInput } from "../inputs/OfferListCreateWithoutOrdersInput";
import { OfferListWhereUniqueInput } from "../inputs/OfferListWhereUniqueInput";

@TypeGraphQL.InputType("OfferListCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class OfferListCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => OfferListCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: OfferListCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: OfferListCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => OfferListWhereUniqueInput, {
    nullable: true
  })
  connect?: OfferListWhereUniqueInput | undefined;
}
