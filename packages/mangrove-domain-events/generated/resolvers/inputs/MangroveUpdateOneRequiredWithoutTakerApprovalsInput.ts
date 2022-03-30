import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateOrConnectWithoutTakerApprovalsInput } from "../inputs/MangroveCreateOrConnectWithoutTakerApprovalsInput";
import { MangroveCreateWithoutTakerApprovalsInput } from "../inputs/MangroveCreateWithoutTakerApprovalsInput";
import { MangroveUpdateWithoutTakerApprovalsInput } from "../inputs/MangroveUpdateWithoutTakerApprovalsInput";
import { MangroveUpsertWithoutTakerApprovalsInput } from "../inputs/MangroveUpsertWithoutTakerApprovalsInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateOneRequiredWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class MangroveUpdateOneRequiredWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => MangroveCreateWithoutTakerApprovalsInput, {
    nullable: true
  })
  create?: MangroveCreateWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateOrConnectWithoutTakerApprovalsInput, {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpsertWithoutTakerApprovalsInput, {
    nullable: true
  })
  upsert?: MangroveUpsertWithoutTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => MangroveWhereUniqueInput, {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MangroveUpdateWithoutTakerApprovalsInput, {
    nullable: true
  })
  update?: MangroveUpdateWithoutTakerApprovalsInput | undefined;
}
