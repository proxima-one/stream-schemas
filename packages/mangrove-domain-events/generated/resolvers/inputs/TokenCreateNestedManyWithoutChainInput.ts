import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyChainInputEnvelope } from "../inputs/TokenCreateManyChainInputEnvelope";
import { TokenCreateOrConnectWithoutChainInput } from "../inputs/TokenCreateOrConnectWithoutChainInput";
import { TokenCreateWithoutChainInput } from "../inputs/TokenCreateWithoutChainInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenCreateNestedManyWithoutChainInput", {
  isAbstract: true
})
export class TokenCreateNestedManyWithoutChainInput {
  @TypeGraphQL.Field(_type => [TokenCreateWithoutChainInput], {
    nullable: true
  })
  create?: TokenCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: TokenCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenWhereUniqueInput[] | undefined;
}
