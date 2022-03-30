import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateManyMakerInput } from "../inputs/MakerBalanceCreateManyMakerInput";

@TypeGraphQL.InputType("MakerBalanceCreateManyMakerInputEnvelope", {
  isAbstract: true
})
export class MakerBalanceCreateManyMakerInputEnvelope {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateManyMakerInput], {
    nullable: false
  })
  data!: MakerBalanceCreateManyMakerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
