import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyMangroveInput } from "../inputs/TakerApprovalCreateManyMangroveInput";

@TypeGraphQL.InputType("TakerApprovalCreateManyMangroveInputEnvelope", {
  isAbstract: true
})
export class TakerApprovalCreateManyMangroveInputEnvelope {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateManyMangroveInput], {
    nullable: false
  })
  data!: TakerApprovalCreateManyMangroveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
