import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceScalarWhereInput } from "../inputs/MakerBalanceScalarWhereInput";
import { MakerBalanceUpdateManyMutationInput } from "../inputs/MakerBalanceUpdateManyMutationInput";

@TypeGraphQL.InputType("MakerBalanceUpdateManyWithWhereWithoutMangroveInput", {
  isAbstract: true
})
export class MakerBalanceUpdateManyWithWhereWithoutMangroveInput {
  @TypeGraphQL.Field(_type => MakerBalanceScalarWhereInput, {
    nullable: false
  })
  where!: MakerBalanceScalarWhereInput;

  @TypeGraphQL.Field(_type => MakerBalanceUpdateManyMutationInput, {
    nullable: false
  })
  data!: MakerBalanceUpdateManyMutationInput;
}
