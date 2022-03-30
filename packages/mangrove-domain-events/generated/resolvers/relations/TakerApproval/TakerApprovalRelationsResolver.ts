import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Mangrove } from "../../../models/Mangrove";
import { OfferList } from "../../../models/OfferList";
import { TakerApproval } from "../../../models/TakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class TakerApprovalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Mangrove, {
    nullable: false
  })
  async mangrove(@TypeGraphQL.Root() takerApproval: TakerApproval, @TypeGraphQL.Ctx() ctx: any): Promise<Mangrove> {
    return getPrismaFromContext(ctx).takerApproval.findUnique({
      where: {
        id: takerApproval.id,
      },
    }).mangrove({});
  }

  @TypeGraphQL.FieldResolver(_type => OfferList, {
    nullable: false
  })
  async offerList(@TypeGraphQL.Root() takerApproval: TakerApproval, @TypeGraphQL.Ctx() ctx: any): Promise<OfferList> {
    return getPrismaFromContext(ctx).takerApproval.findUnique({
      where: {
        id: takerApproval.id,
      },
    }).offerList({});
  }

  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() takerApproval: TakerApproval, @TypeGraphQL.Ctx() ctx: any): Promise<Account> {
    return getPrismaFromContext(ctx).takerApproval.findUnique({
      where: {
        id: takerApproval.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: false
  })
  async spender(@TypeGraphQL.Root() takerApproval: TakerApproval, @TypeGraphQL.Ctx() ctx: any): Promise<Account> {
    return getPrismaFromContext(ctx).takerApproval.findUnique({
      where: {
        id: takerApproval.id,
      },
    }).spender({});
  }
}
