import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakerBalanceCreateNestedManyWithoutMangroveInput } from "../inputs/MakerBalanceCreateNestedManyWithoutMangroveInput";
import { OfferCreateNestedManyWithoutMangroveInput } from "../inputs/OfferCreateNestedManyWithoutMangroveInput";
import { OfferListCreateNestedManyWithoutMangroveInput } from "../inputs/OfferListCreateNestedManyWithoutMangroveInput";
import { OrderCreateNestedManyWithoutMangroveInput } from "../inputs/OrderCreateNestedManyWithoutMangroveInput";
import { TakerApprovalCreateNestedManyWithoutMangroveInput } from "../inputs/TakerApprovalCreateNestedManyWithoutMangroveInput";

@TypeGraphQL.InputType("MangroveCreateWithoutChainInput", {
  isAbstract: true
})
export class MangroveCreateWithoutChainInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  governance?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  monitor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vault?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  useOracle?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  notify?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasmax?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasprice?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dead?: boolean | undefined;

  @TypeGraphQL.Field(_type => OfferListCreateNestedManyWithoutMangroveInput, {
    nullable: true
  })
  offerLists?: OfferListCreateNestedManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => OfferCreateNestedManyWithoutMangroveInput, {
    nullable: true
  })
  offers?: OfferCreateNestedManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutMangroveInput, {
    nullable: true
  })
  orders?: OrderCreateNestedManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => MakerBalanceCreateNestedManyWithoutMangroveInput, {
    nullable: true
  })
  makerBalances?: MakerBalanceCreateNestedManyWithoutMangroveInput | undefined;

  @TypeGraphQL.Field(_type => TakerApprovalCreateNestedManyWithoutMangroveInput, {
    nullable: true
  })
  takerApprovals?: TakerApprovalCreateNestedManyWithoutMangroveInput | undefined;
}
