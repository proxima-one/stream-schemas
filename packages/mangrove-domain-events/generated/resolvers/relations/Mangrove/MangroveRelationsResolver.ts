import * as TypeGraphQL from "type-graphql";
import { Chain } from "../../../models/Chain";
import { MakerBalance } from "../../../models/MakerBalance";
import { Mangrove } from "../../../models/Mangrove";
import { Offer } from "../../../models/Offer";
import { OfferList } from "../../../models/OfferList";
import { Order } from "../../../models/Order";
import { TakerApproval } from "../../../models/TakerApproval";
import { MangroveMakerBalancesArgs } from "./args/MangroveMakerBalancesArgs";
import { MangroveOfferListsArgs } from "./args/MangroveOfferListsArgs";
import { MangroveOffersArgs } from "./args/MangroveOffersArgs";
import { MangroveOrdersArgs } from "./args/MangroveOrdersArgs";
import { MangroveTakerApprovalsArgs } from "./args/MangroveTakerApprovalsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mangrove)
export class MangroveRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chain, {
    nullable: false
  })
  async chain(@TypeGraphQL.Root() mangrove: Mangrove, @TypeGraphQL.Ctx() ctx: any): Promise<Chain> {
    return getPrismaFromContext(ctx).mangrove.findUnique({
      where: {
        id: mangrove.id,
      },
    }).chain({});
  }

  @TypeGraphQL.FieldResolver(_type => [OfferList], {
    nullable: false
  })
  async offerLists(@TypeGraphQL.Root() mangrove: Mangrove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MangroveOfferListsArgs): Promise<OfferList[]> {
    return getPrismaFromContext(ctx).mangrove.findUnique({
      where: {
        id: mangrove.id,
      },
    }).offerLists(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Offer], {
    nullable: false
  })
  async offers(@TypeGraphQL.Root() mangrove: Mangrove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MangroveOffersArgs): Promise<Offer[]> {
    return getPrismaFromContext(ctx).mangrove.findUnique({
      where: {
        id: mangrove.id,
      },
    }).offers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() mangrove: Mangrove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MangroveOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).mangrove.findUnique({
      where: {
        id: mangrove.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => [MakerBalance], {
    nullable: false
  })
  async makerBalances(@TypeGraphQL.Root() mangrove: Mangrove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MangroveMakerBalancesArgs): Promise<MakerBalance[]> {
    return getPrismaFromContext(ctx).mangrove.findUnique({
      where: {
        id: mangrove.id,
      },
    }).makerBalances(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TakerApproval], {
    nullable: false
  })
  async takerApprovals(@TypeGraphQL.Root() mangrove: Mangrove, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MangroveTakerApprovalsArgs): Promise<TakerApproval[]> {
    return getPrismaFromContext(ctx).mangrove.findUnique({
      where: {
        id: mangrove.id,
      },
    }).takerApprovals(args);
  }
}
