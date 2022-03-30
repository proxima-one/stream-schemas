import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutOfferListsInput } from "../inputs/MangroveCreateWithoutOfferListsInput";
import { MangroveUpdateWithoutOfferListsInput } from "../inputs/MangroveUpdateWithoutOfferListsInput";

@TypeGraphQL.InputType("MangroveUpsertWithoutOfferListsInput", {
  isAbstract: true
})
export class MangroveUpsertWithoutOfferListsInput {
  @TypeGraphQL.Field(_type => MangroveUpdateWithoutOfferListsInput, {
    nullable: false
  })
  update!: MangroveUpdateWithoutOfferListsInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutOfferListsInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutOfferListsInput;
}
