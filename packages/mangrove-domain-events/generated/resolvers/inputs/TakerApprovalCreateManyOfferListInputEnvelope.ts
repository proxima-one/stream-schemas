import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TakerApprovalCreateManyOfferListInput } from "../inputs/TakerApprovalCreateManyOfferListInput";

@TypeGraphQL.InputType("TakerApprovalCreateManyOfferListInputEnvelope", {
  isAbstract: true
})
export class TakerApprovalCreateManyOfferListInputEnvelope {
  @TypeGraphQL.Field(_type => [TakerApprovalCreateManyOfferListInput], {
    nullable: false
  })
  data!: TakerApprovalCreateManyOfferListInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
