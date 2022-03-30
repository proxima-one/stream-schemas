import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { Mangrove } from "../models/Mangrove";
import { OfferList } from "../models/OfferList";

@TypeGraphQL.ObjectType("TakerApproval", {
  isAbstract: true
})
export class TakerApproval {
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

  mangrove?: Mangrove;

  offerList?: OfferList;

  owner?: Account;

  spender?: Account;
}
