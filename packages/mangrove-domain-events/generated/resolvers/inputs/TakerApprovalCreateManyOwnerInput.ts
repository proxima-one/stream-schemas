import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TakerApprovalCreateManyOwnerInput", {
  isAbstract: true
})
export class TakerApprovalCreateManyOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mangroveId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  offerListId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  spenderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;
}
