import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutOffersInput } from "../inputs/MangroveCreateOrConnectWithoutOffersInput";
import { MangroveCreateWithoutOffersInput } from "../inputs/MangroveCreateWithoutOffersInput";
import { MangroveUpdateWithoutOffersInput } from "../inputs/MangroveUpdateWithoutOffersInput";
import { MangroveUpsertWithoutOffersInput } from "../inputs/MangroveUpsertWithoutOffersInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateOneRequiredWithoutOffersInput", {
  isAbstract: true
})
export class MangroveUpdateOneRequiredWithoutOffersInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutOffersInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpsertWithoutOffersInput, {
    nullable: true
  })
  upsert?: MangroveUpsertWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutOffersInput, {
    nullable: true
  })
  update?: MangroveUpdateWithoutOffersInput | undefined;
}
