import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutOrdersInput } from "../inputs/AccountCreateNestedOneWithoutOrdersInput";
import { MangroveCreateNestedOneWithoutOrdersInput } from "../inputs/MangroveCreateNestedOneWithoutOrdersInput";
import { TakenOfferCreateNestedManyWithoutOrderInput } from "../inputs/TakenOfferCreateNestedManyWithoutOrderInput";

@TypeGraphQL.InputType("OrderCreateWithoutOfferListInput", {
  isAbstract: true
})
export class OrderCreateWithoutOfferListInput {
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
    nullable: false
  })
  takerGot!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerGotNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  takerGave!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  takerGaveNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  takerPaidPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  makerPaidPrice?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  penalty!: string;

  @TypeGraphQL.Field(_type => TakenOfferCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  takenOffers?: TakenOfferCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => MangroveCreateNestedOneWithoutOrdersInput, {
    nullable: false
  })
  mangrove!: MangroveCreateNestedOneWithoutOrdersInput;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutOrdersInput, {
    nullable: false
  })
  taker!: AccountCreateNestedOneWithoutOrdersInput;
}
