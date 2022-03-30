import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutMangrovesInput } from "../inputs/ChainCreateOrConnectWithoutMangrovesInput";
import { ChainCreateWithoutMangrovesInput } from "../inputs/ChainCreateWithoutMangrovesInput";
import { ChainUpdateWithoutMangrovesInput } from "../inputs/ChainUpdateWithoutMangrovesInput";
import { ChainUpsertWithoutMangrovesInput } from "../inputs/ChainUpsertWithoutMangrovesInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainUpdateOneRequiredWithoutMangrovesInput", {
  isAbstract: true
})
export class ChainUpdateOneRequiredWithoutMangrovesInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutMangrovesInput, {
    nullable: true
  })
  create?: ChainCreateWithoutMangrovesInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutMangrovesInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutMangrovesInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpsertWithoutMangrovesInput, {
    nullable: true
  })
  upsert?: ChainUpsertWithoutMangrovesInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateWithoutMangrovesInput, {
    nullable: true
  })
  update?: ChainUpdateWithoutMangrovesInput | undefined;
}
