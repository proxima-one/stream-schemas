import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateNestedManyWithoutChainInput } from "../inputs/MangroveCreateNestedManyWithoutChainInput";
import { TokenCreateNestedManyWithoutChainInput } from "../inputs/TokenCreateNestedManyWithoutChainInput";

@TypeGraphQL.InputType("ChainCreateInput", {
  isAbstract: true
})
export class ChainCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MangroveCreateNestedManyWithoutChainInput, {
    nullable: true
  })
  mangroves?: MangroveCreateNestedManyWithoutChainInput | undefined;

  @TypeGraphQL.Field(_type => TokenCreateNestedManyWithoutChainInput, {
    nullable: true
  })
  tokens?: TokenCreateNestedManyWithoutChainInput | undefined;
}
