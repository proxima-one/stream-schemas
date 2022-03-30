import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutOffersInput } from "../inputs/AccountCreateNestedOneWithoutOffersInput";
import { MangroveCreateNestedOneWithoutOffersInput } from "../inputs/MangroveCreateNestedOneWithoutOffersInput";
import { OfferListCreateNestedOneWithoutOffersInput } from "../inputs/OfferListCreateNestedOneWithoutOffersInput";

@TypeGraphQL.InputType("OfferCreateInput", {
  isAbstract: true
})
export class OfferCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  blockNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prevOfferId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  wants!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  wantsNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  gives!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  givesNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaysPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaysPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gasprice!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gasreq!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  live!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deprovisioned!: boolean;

  @TypeGraphQL.Field(_type => MangroveCreateNestedOneWithoutOffersInput, {
    nullable: false
  })
  mangrove!: MangroveCreateNestedOneWithoutOffersInput;

  @TypeGraphQL.Field(_type => OfferListCreateNestedOneWithoutOffersInput, {
    nullable: false
  })
  offerList!: OfferListCreateNestedOneWithoutOffersInput;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutOffersInput, {
    nullable: false
  })
  maker!: AccountCreateNestedOneWithoutOffersInput;
}
