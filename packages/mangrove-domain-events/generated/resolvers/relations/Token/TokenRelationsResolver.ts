import * as TypeGraphQL from "type-graphql";
import { Chain } from "../../../models/Chain";
import { OfferList } from "../../../models/OfferList";
import { Token } from "../../../models/Token";
import { TokenOfferListsWhereInboundArgs } from "./args/TokenOfferListsWhereInboundArgs";
import { TokenOfferListsWhereOutboundArgs } from "./args/TokenOfferListsWhereOutboundArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Token)
export class TokenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chain, {
    nullable: false
  })
  async chain(@TypeGraphQL.Root() token: Token, @TypeGraphQL.Ctx() ctx: any): Promise<Chain> {
    return getPrismaFromContext(ctx).token.findUnique({
      where: {
        id: token.id,
      },
    }).chain({});
  }

  @TypeGraphQL.FieldResolver(_type => [OfferList], {
    nullable: false
  })
  async offerListsWhereInbound(@TypeGraphQL.Root() token: Token, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TokenOfferListsWhereInboundArgs): Promise<OfferList[]> {
    return getPrismaFromContext(ctx).token.findUnique({
      where: {
        id: token.id,
      },
    }).offerListsWhereInbound(args);
  }

  @TypeGraphQL.FieldResolver(_type => [OfferList], {
    nullable: false
  })
  async offerListsWhereOutbound(@TypeGraphQL.Root() token: Token, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TokenOfferListsWhereOutboundArgs): Promise<OfferList[]> {
    return getPrismaFromContext(ctx).token.findUnique({
      where: {
        id: token.id,
      },
    }).offerListsWhereOutbound(args);
  }
}
