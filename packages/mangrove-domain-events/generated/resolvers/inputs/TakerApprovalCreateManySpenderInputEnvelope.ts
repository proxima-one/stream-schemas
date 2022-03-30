import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManySpenderInput } from "../inputs/TakerApprovalCreateManySpenderInput";

@TypeGraphQL.InputType("TakerApprovalCreateManySpenderInputEnvelope", {
  isAbstract: true
})
export class TakerApprovalCreateManySpenderInputEnvelope {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateManySpenderInput], {
    nullable: false
  })
  data!: TakerApprovalCreateManySpenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
