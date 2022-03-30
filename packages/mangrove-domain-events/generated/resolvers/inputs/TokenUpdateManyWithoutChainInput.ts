import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyChainInputEnvelope } from "../inputs/TokenCreateManyChainInputEnvelope";
import { TokenCreateOrConnectWithoutChainInput } from "../inputs/TokenCreateOrConnectWithoutChainInput";
import { TokenCreateWithoutChainInput } from "../inputs/TokenCreateWithoutChainInput";
import { TokenScalarWhereInput } from "../inputs/TokenScalarWhereInput";
import { TokenUpdateManyWithWhereWithoutChainInput } from "../inputs/TokenUpdateManyWithWhereWithoutChainInput";
import { TokenUpdateWithWhereUniqueWithoutChainInput } from "../inputs/TokenUpdateWithWhereUniqueWithoutChainInput";
import { TokenUpsertWithWhereUniqueWithoutChainInput } from "../inputs/TokenUpsertWithWhereUniqueWithoutChainInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpdateManyWithoutChainInput", {
  isAbstract: true
})
export class TokenUpdateManyWithoutChainInput {
  @TypeGraphQL.Field(_type => [TokenCreateWithoutChainInput], {
    nullable: true
  })
  create?: TokenCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpsertWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  upsert?: TokenUpsertWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: TokenCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  set?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  delete?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpdateWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  update?: TokenUpdateWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpdateManyWithWhereWithoutChainInput], {
    nullable: true
  })
  updateMany?: TokenUpdateManyWithWhereWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TokenScalarWhereInput[] | undefined;
}
