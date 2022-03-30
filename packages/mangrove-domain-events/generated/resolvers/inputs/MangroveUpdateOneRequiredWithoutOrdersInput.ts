import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutOrdersInput } from "../inputs/MangroveCreateOrConnectWithoutOrdersInput";
import { MangroveCreateWithoutOrdersInput } from "../inputs/MangroveCreateWithoutOrdersInput";
import { MangroveUpdateWithoutOrdersInput } from "../inputs/MangroveUpdateWithoutOrdersInput";
import { MangroveUpsertWithoutOrdersInput } from "../inputs/MangroveUpsertWithoutOrdersInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateOneRequiredWithoutOrdersInput", {
  isAbstract: true
})
export class MangroveUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: MangroveUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: MangroveUpdateWithoutOrdersInput | undefined;
}
