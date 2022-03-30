import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainCreateOrConnectWithoutTokensInput } from "../inputs/ChainCreateOrConnectWithoutTokensInput";
import { ChainCreateWithoutTokensInput } from "../inputs/ChainCreateWithoutTokensInput";
import { ChainUpdateWithoutTokensInput } from "../inputs/ChainUpdateWithoutTokensInput";
import { ChainUpsertWithoutTokensInput } from "../inputs/ChainUpsertWithoutTokensInput";
import { ChainWhereUniqueInput } from "../inputs/ChainWhereUniqueInput";

@TypeGraphQL.InputType("ChainUpdateOneRequiredWithoutTokensInput", {
  isAbstract: true
})
export class ChainUpdateOneRequiredWithoutTokensInput {
  @TypeGraphQL.Field(_type => ChainCreateWithoutTokensInput, {
    nullable: true
  })
  create?: ChainCreateWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => ChainCreateOrConnectWithoutTokensInput, {
    nullable: true
  })
  connectOrCreate?: ChainCreateOrConnectWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpsertWithoutTokensInput, {
    nullable: true
  })
  upsert?: ChainUpsertWithoutTokensInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: true
  })
  connect?: ChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChainUpdateWithoutTokensInput, {
    nullable: true
  })
  update?: ChainUpdateWithoutTokensInput | undefined;
}
