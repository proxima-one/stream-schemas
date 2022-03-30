import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateManyChainInput } from "../inputs/MangroveCreateManyChainInput";

@TypeGraphQL.InputType("MangroveCreateManyChainInputEnvelope", {
  isAbstract: true
})
export class MangroveCreateManyChainInputEnvelope {
  @TypeGraphQL.Field(_type => [MangroveCreateManyChainInput], {
    nullable: false
  })
  data!: MangroveCreateManyChainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
