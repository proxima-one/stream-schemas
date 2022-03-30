import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByWithRelationInput } from "../inputs/AccountOrderByWithRelationInput";
import { MangroveOrderByWithRelationInput } from "../inputs/MangroveOrderByWithRelationInput";
import { OfferListOrderByWithRelationInput } from "../inputs/OfferListOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TakerApprovalOrderByWithRelationInput", {
  isAbstract: true
})
export class TakerApprovalOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mangroveId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  offerListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  spenderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MangroveOrderByWithRelationInput, {
    nullable: true
  })
  mangrove?: MangroveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => OfferListOrderByWithRelationInput, {
    nullable: true
  })
  offerList?: OfferListOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByWithRelationInput, {
    nullable: true
  })
  owner?: AccountOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByWithRelationInput, {
    nullable: true
  })
  spender?: AccountOrderByWithRelationInput | undefined;
}
