import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveScalarWhereInput } from "../inputs/MangroveScalarWhereInput";
import { MangroveUpdateManyMutationInput } from "../inputs/MangroveUpdateManyMutationInput";

@TypeGraphQL.InputType("MangroveUpdateManyWithWhereWithoutChainInput", {
  isAbstract: true
})
export class MangroveUpdateManyWithWhereWithoutChainInput {
  @TypeGraphQL.Field(_type => MangroveScalarWhereInput, {
    nullable: false
  })
  where!: MangroveScalarWhereInput;

  @TypeGraphQL.Field(_type => MangroveUpdateManyMutationInput, {
    nullable: false
  })
  data!: MangroveUpdateManyMutationInput;
}
