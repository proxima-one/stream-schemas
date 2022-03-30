import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyChainInput } from "../inputs/TokenCreateManyChainInput";

@TypeGraphQL.InputType("TokenCreateManyChainInputEnvelope", {
  isAbstract: true
})
export class TokenCreateManyChainInputEnvelope {
  @TypeGraphQL.Field(_type => [TokenCreateManyChainInput], {
    nullable: false
  })
  data!: TokenCreateManyChainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
