import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCountAggregate } from "../outputs/TakerApprovalCountAggregate";
import { TakerApprovalMaxAggregate } from "../outputs/TakerApprovalMaxAggregate";
import { TakerApprovalMinAggregate } from "../outputs/TakerApprovalMinAggregate";

@TypeGraphQL.ObjectType("AggregateTakerApproval", {
  isAbstract: true
})
export class AggregateTakerApproval {
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
