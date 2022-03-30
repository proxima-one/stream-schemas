import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutOfferListsInput } from "../inputs/MangroveCreateOrConnectWithoutOfferListsInput";
import { MangroveCreateWithoutOfferListsInput } from "../inputs/MangroveCreateWithoutOfferListsInput";
import { MangroveUpdateWithoutOfferListsInput } from "../inputs/MangroveUpdateWithoutOfferListsInput";
import { MangroveUpsertWithoutOfferListsInput } from "../inputs/MangroveUpsertWithoutOfferListsInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateOneRequiredWithoutOfferListsInput", {
  isAbstract: true
})
export class MangroveUpdateOneRequiredWithoutOfferListsInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutOfferListsInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutOfferListsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutOfferListsInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutOfferListsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpsertWithoutOfferListsInput, {
    nullable: true
  })
  upsert?: MangroveUpsertWithoutOfferListsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutOfferListsInput, {
    nullable: true
  })
  update?: MangroveUpdateWithoutOfferListsInput | undefined;
}
