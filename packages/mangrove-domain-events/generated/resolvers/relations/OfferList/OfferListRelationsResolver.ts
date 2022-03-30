import * as TypeGraphQL from "type-graphql";
import { Mangrove } from "../../../models/Mangrove";
import { Offer } from "../../../models/Offer";
import { OfferList } from "../../../models/OfferList";
import { Order } from "../../../models/Order";
import { TakerApproval } from "../../../models/TakerApproval";
import { Token } from "../../../models/Token";
import { OfferListOffersArgs } from "./args/OfferListOffersArgs";
import { OfferListOrdersArgs } from "./args/OfferListOrdersArgs";
import { OfferListTakerApprovalsArgs } from "./args/OfferListTakerApprovalsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfferList)
export class OfferListRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Mangrove, {
    nullable: false
  })
  async mangrove(@TypeGraphQL.Root() offerList: OfferList, @TypeGraphQL.Ctx() ctx: any): Promise<Mangrove> {
    return getPrismaFromContext(ctx).offerList.findUnique({
      where: {
        id: offerList.id,
      },
    }).mangrove({});
  }

  @TypeGraphQL.FieldResolver(_type => Token, {
    nullable: false
  })
  async inboundToken(@TypeGraphQL.Root() offerList: OfferList, @TypeGraphQL.Ctx() ctx: any): Promise<Token> {
    return getPrismaFromContext(ctx).offerList.findUnique({
      where: {
        id: offerList.id,
      },
    }).inboundToken({});
  }

  @TypeGraphQL.FieldResolver(_type => Token, {
    nullable: false
  })
  async outboundToken(@TypeGraphQL.Root() offerList: OfferList, @TypeGraphQL.Ctx() ctx: any): Promise<Token> {
    return getPrismaFromContext(ctx).offerList.findUnique({
      where: {
        id: offerList.id,
      },
    }).outboundToken({});
  }

  @TypeGraphQL.FieldResolver(_type => [Offer], {
    nullable: false
  })
  async offers(@TypeGraphQL.Root() offerList: OfferList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OfferListOffersArgs): Promise<Offer[]> {
    return getPrismaFromContext(ctx).offerList.findUnique({
      where: {
        id: offerList.id,
      },
    }).offers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TakerApproval], {
    nullable: false
  })
  async takerApprovals(@TypeGraphQL.Root() offerList: OfferList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OfferListTakerApprovalsArgs): Promise<TakerApproval[]> {
    return getPrismaFromContext(ctx).offerList.findUnique({
      where: {
        id: offerList.id,
      },
    }).takerApprovals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() offerList: OfferList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OfferListOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).offerList.findUnique({
      where: {
        id: offerList.id,
      },
    }).orders(args);
  }
}
