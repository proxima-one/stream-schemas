import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TakerApprovalMinAggregate", {
  isAbstract: true
})
export class TakerApprovalMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mangroveId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  offerListId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ownerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  spenderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value!: string | null;
}
