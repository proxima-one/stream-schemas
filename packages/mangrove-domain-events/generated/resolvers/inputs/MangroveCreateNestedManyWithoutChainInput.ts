import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateManyChainInputEnvelope } from "../inputs/MangroveCreateManyChainInputEnvelope";
import { MangroveCreateOrConnectWithoutChainInput } from "../inputs/MangroveCreateOrConnectWithoutChainInput";
import { MangroveCreateWithoutChainInput } from "../inputs/MangroveCreateWithoutChainInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveCreateNestedManyWithoutChainInput", {
  isAbstract: true
})
export class MangroveCreateNestedManyWithoutChainInput {
  @TypeGraphQL.Field(_type => [MangroveCreateWithoutChainInput], {
    nullable: true
  })
  create?: MangroveCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: MangroveCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereUniqueInput], {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput[] | undefined;
}
