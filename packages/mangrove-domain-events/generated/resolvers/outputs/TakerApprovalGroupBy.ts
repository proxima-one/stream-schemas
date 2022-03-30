import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCountAggregate } from "../outputs/TakerApprovalCountAggregate";
import { TakerApprovalMaxAggregate } from "../outputs/TakerApprovalMaxAggregate";
import { TakerApprovalMinAggregate } from "../outputs/TakerApprovalMinAggregate";

@TypeGraphQL.ObjectType("TakerApprovalGroupBy", {
  isAbstract: true
})
export class TakerApprovalGroupBy {
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
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  spenderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => TakerApprovalCountAggregate, {
    nullable: true
  })
  _count!: TakerApprovalCountAggregate | null;

  @TypeGraphQL.Field(_type => TakerApprovalMinAggregate, {
    nullable: true
  })
  _min!: TakerApprovalMinAggregate | null;

  @TypeGraphQL.Field(_type => TakerApprovalMaxAggregate, {
    nullable: true
  })
  _max!: TakerApprovalMaxAggregate | null;
}
