import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateWithoutOffersInput } from "../inputs/MangroveCreateWithoutOffersInput";
import { MangroveUpdateWithoutOffersInput } from "../inputs/MangroveUpdateWithoutOffersInput";

@TypeGraphQL.InputType("MangroveUpsertWithoutOffersInput", {
  isAbstract: true
})
export class MangroveUpsertWithoutOffersInput {
  @TypeGraphQL.Field(_type => MangroveUpdateWithoutOffersInput, {
    nullable: false
  })
  update!: MangroveUpdateWithoutOffersInput;

  @TypeGraphQL.Field(_type => MangroveCreateWithoutOffersInput, {
    nullable: false
  })
  create!: MangroveCreateWithoutOffersInput;
}
