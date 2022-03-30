import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MangroveCreateNestedOneWithoutOfferListsInput } from "../inputs/MangroveCreateNestedOneWithoutOfferListsInput";
import { OfferCreateNestedManyWithoutOfferListInput } from "../inputs/OfferCreateNestedManyWithoutOfferListInput";
import { OrderCreateNestedManyWithoutOfferListInput } from "../inputs/OrderCreateNestedManyWithoutOfferListInput";
import { TokenCreateNestedOneWithoutOfferListsWhereInboundInput } from "../inputs/TokenCreateNestedOneWithoutOfferListsWhereInboundInput";
import { TokenCreateNestedOneWithoutOfferListsWhereOutboundInput } from "../inputs/TokenCreateNestedOneWithoutOfferListsWhereOutboundInput";

@TypeGraphQL.InputType("OfferListCreateWithoutTakerApprovalsInput", {
  isAbstract: true
})
export class OfferListCreateWithoutTakerApprovalsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fee?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gasbase?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  density?: string | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateNestedOneWithoutOfferListsInput, {
    nullable: false
  })
  mangrove!: MangroveCreateNestedOneWithoutOfferListsInput;

  @TypeGraphQL.Field(_type => TokenCreateNestedOneWithoutOfferListsWhereInboundInput, {
    nullable: false
  })
  inboundToken!: TokenCreateNestedOneWithoutOfferListsWhereInboundInput;

  @TypeGraphQL.Field(_type => TokenCreateNestedOneWithoutOfferListsWhereOutboundInput, {
    nullable: false
  })
  outboundToken!: TokenCreateNestedOneWithoutOfferListsWhereOutboundInput;

  @TypeGraphQL.Field(_type => OfferCreateNestedManyWithoutOfferListInput, {
    nullable: true
  })
  offers?: OfferCreateNestedManyWithoutOfferListInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutOfferListInput, {
    nullable: true
  })
  orders?: OrderCreateNestedManyWithoutOfferListInput | undefined;
}
