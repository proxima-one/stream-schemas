import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutOfferListsInput } from "../inputs/MangroveCreateOrConnectWithoutOfferListsInput";
import { MangroveCreateWithoutOfferListsInput } from "../inputs/MangroveCreateWithoutOfferListsInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateNestedOneWithoutOfferListsInput", {
  isAbstract: true
})
export class MangroveCreateNestedOneWithoutOfferListsInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutOfferListsInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutOfferListsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutOfferListsInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutOfferListsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;
}
