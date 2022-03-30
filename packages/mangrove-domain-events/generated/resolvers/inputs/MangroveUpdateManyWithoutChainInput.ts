import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateManyChainInputEnvelope } from "../inputs/MangroveCreateManyChainInputEnvelope";
import { MangroveCreateOrConnectWithoutChainInput } from "../inputs/MangroveCreateOrConnectWithoutChainInput";
import { MangroveCreateWithoutChainInput } from "../inputs/MangroveCreateWithoutChainInput";
import { MangroveScalarWhereInput } from "../inputs/MangroveScalarWhereInput";
import { MangroveUpdateManyWithWhereWithoutChainInput } from "../inputs/MangroveUpdateManyWithWhereWithoutChainInput";
import { MangroveUpdateWithWhereUniqueWithoutChainInput } from "../inputs/MangroveUpdateWithWhereUniqueWithoutChainInput";
import { MangroveUpsertWithWhereUniqueWithoutChainInput } from "../inputs/MangroveUpsertWithWhereUniqueWithoutChainInput";
import { MangroveWhereUniqueInput } from "../inputs/MangroveWhereUniqueInput";

@TypeGraphQL.InputType("MangroveUpdateManyWithoutChainInput", {
  isAbstract: true
})
export class MangroveUpdateManyWithoutChainInput {
  @TypeGraphQL.Field(_type => [MangroveCreateWithoutChainInput], {
    nullable: true
  })
  create?: MangroveCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: MangroveCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveUpsertWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  upsert?: MangroveUpsertWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: MangroveCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereUniqueInput], {
    nullable: true
  })
  set?: MangroveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MangroveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereUniqueInput], {
    nullable: true
  })
  delete?: MangroveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveWhereUniqueInput], {
    nullable: true
  })
  connect?: MangroveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveUpdateWithWhereUniqueWithoutChainInput], {
    nullable: true
  })
  update?: MangroveUpdateWithWhereUniqueWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveUpdateManyWithWhereWithoutChainInput], {
    nullable: true
  })
  updateMany?: MangroveUpdateManyWithWhereWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [MangroveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MangroveScalarWhereInput[] | undefined;
}
