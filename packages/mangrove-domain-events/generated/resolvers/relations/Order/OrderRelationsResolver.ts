import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Mangrove } from "../../../models/Mangrove";
import { OfferList } from "../../../models/OfferList";
import { Order } from "../../../models/Order";
import { TakenOffer } from "../../../models/TakenOffer";
import { OrderTakenOffersArgs } from "./args/OrderTakenOffersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TakenOffer], {
    nullable: false
  })
  async takenOffers(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrderTakenOffersArgs): Promise<TakenOffer[]> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).takenOffers(args);
  }

  @TypeGraphQL.FieldResolver(_type => Mangrove, {
    nullable: false
  })
  async mangrove(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Mangrove> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).mangrove({});
  }

  @TypeGraphQL.FieldResolver(_type => OfferList, {
    nullable: false
  })
  async offerList(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<OfferList> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).offerList({});
  }

  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: false
  })
  async taker(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Account> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).taker({});
  }
}
