import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutOrdersInput } from "../inputs/MangroveCreateOrConnectWithoutOrdersInput";
import { MangroveCreateWithoutOrdersInput } from "../inputs/MangroveCreateWithoutOrdersInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class MangroveCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;
}
