import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutOffersInput } from "../inputs/MangroveCreateOrConnectWithoutOffersInput";
import { MangroveCreateWithoutOffersInput } from "../inputs/MangroveCreateWithoutOffersInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateNestedOneWithoutOffersInput", {
  isAbstract: true
})
export class MangroveCreateNestedOneWithoutOffersInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutOffersInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;
}
