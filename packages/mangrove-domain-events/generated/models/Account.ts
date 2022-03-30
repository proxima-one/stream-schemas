import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MakerBalance } from "../models/MakerBalance";
import { Offer } from "../models/Offer";
import { Order } from "../models/Order";
import { TakerApproval } from "../models/TakerApproval";
import { AccountCount } from "../resolvers/outputs/AccountCount";

@TypeGraphQL.ObjectType("Account", {
  isAbstract: true
})
export class Account {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  ownedTakerApprovals?: TakerApproval[];

  spenderTakerApprovals?: TakerApproval[];

  offers?: Offer[];

  orders?: Order[];

  makerBalances?: MakerBalance[];

  @TypeGraphQL.Field(_type => AccountCount, {
    nullable: true
  })
  _count?: AccountCount | null;
}
