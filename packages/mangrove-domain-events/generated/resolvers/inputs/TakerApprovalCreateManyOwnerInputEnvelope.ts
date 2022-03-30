import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyOwnerInput } from "../inputs/TakerApprovalCreateManyOwnerInput";

@TypeGraphQL.InputType("TakerApprovalCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class TakerApprovalCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateManyOwnerInput], {
    nullable: false
  })
  data!: TakerApprovalCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
