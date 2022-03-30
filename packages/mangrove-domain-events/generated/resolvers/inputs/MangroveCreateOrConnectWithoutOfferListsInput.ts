import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutOfferListsInput } from "../inputs/MangroveCreateWithoutOfferListsInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateOrConnectWithoutOfferListsInput", {
  isAbstract: true
})
export class MangroveCreateOrConnectWithoutOfferListsInput {
  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: false
  })
  where!: MangroveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutOfferListsInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutOfferListsInput;
}
