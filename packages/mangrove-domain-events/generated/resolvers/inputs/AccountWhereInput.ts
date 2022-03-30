import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceListRelationFilter } from "../inputs/MakerBalanceListRelationFilter";
import { OfferListRelationFilter } from "../inputs/OfferListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TakerApprovalListRelationFilter } from "../inputs/TakerApprovalListRelationFilter";

@TypeGraphQL.InputType("AccountWhereInput", {
  isAbstract: true
})
export class AccountWhereInput {
  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  AND?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  OR?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  NOT?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalListRelationFilter, {
    nullable: true
  })
  ownedTakerApprovals?: TakerApprovalListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalListRelationFilter, {
    nullable: true
  })
  spenderTakerApprovals?: TakerApprovalListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListRelationFilter, {
    nullable: true
  })
  offers?: OfferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  orders?: OrderListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceListRelationFilter, {
    nullable: true
  })
  makerBalances?: MakerBalanceListRelationFilter | undefined;
}
