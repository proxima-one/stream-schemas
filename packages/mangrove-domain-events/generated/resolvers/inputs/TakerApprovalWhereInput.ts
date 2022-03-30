import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { MangroveRelationFilter } from "../inputs/MangroveRelationFilter";
import { OfferListRelationFilter } from "../inputs/OfferListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TakerApprovalWhereInput", {
  isAbstract: true
})
export class TakerApprovalWhereInput {
  @TypeGraphQL.Field(_type => [TakerApprovalWhereInput], {
    nullable: true
  })
  AND?: TakerApprovalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereInput], {
    nullable: true
  })
  OR?: TakerApprovalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TakerApprovalWhereInput], {
    nullable: true
  })
  NOT?: TakerApprovalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mangroveId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  offerListId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  spenderId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MangroveRelationFilter, {
    nullable: true
  })
  mangrove?: MangroveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OfferListRelationFilter, {
    nullable: true
  })
  offerList?: OfferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AccountRelationFilter, {
    nullable: true
  })
  owner?: AccountRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AccountRelationFilter, {
    nullable: true
  })
  spender?: AccountRelationFilter | undefined;
}
