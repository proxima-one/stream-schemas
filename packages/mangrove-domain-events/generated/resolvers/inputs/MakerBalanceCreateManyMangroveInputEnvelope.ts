import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateManyMangroveInput } from "../inputs/MakerBalanceCreateManyMangroveInput";

@TypeGraphQL.InputType("MakerBalanceCreateManyMangroveInputEnvelope", {
  isAbstract: true
})
export class MakerBalanceCreateManyMangroveInputEnvelope {
  @TypeGraphQL.Field(_type => [MakerBalanceCreateManyMangroveInput], {
    nullable: false
  })
  data!: MakerBalanceCreateManyMangroveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
