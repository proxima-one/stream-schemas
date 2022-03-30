import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Mangrove } from "../../../models/Mangrove";
import { Offer } from "../../../models/Offer";
import { OfferList } from "../../../models/OfferList";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Offer)
export class OfferRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Mangrove, {
    nullable: false
  })
  async mangrove(@TypeGraphQL.Root() offer: Offer, @TypeGraphQL.Ctx() ctx: any): Promise<Mangrove> {
    return getPrismaFromContext(ctx).offer.findUnique({
      where: {
        id: offer.id,
      },
    }).mangrove({});
  }

  @TypeGraphQL.FieldResolver(_type => OfferList, {
    nullable: false
  })
  async offerList(@TypeGraphQL.Root() offer: Offer, @TypeGraphQL.Ctx() ctx: any): Promise<OfferList> {
    return getPrismaFromContext(ctx).offer.findUnique({
      where: {
        id: offer.id,
      },
    }).offerList({});
  }

  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: false
  })
  async maker(@TypeGraphQL.Root() offer: Offer, @TypeGraphQL.Ctx() ctx: any): Promise<Account> {
    return getPrismaFromContext(ctx).offer.findUnique({
      where: {
        id: offer.id,
      },
    }).maker({});
  }
}
