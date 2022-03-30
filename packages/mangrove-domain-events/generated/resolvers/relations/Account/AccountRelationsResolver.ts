import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { MakerBalance } from "../../../models/MakerBalance";
import { Offer } from "../../../models/Offer";
import { Order } from "../../../models/Order";
import { TakerApproval } from "../../../models/TakerApproval";
import { AccountMakerBalancesArgs } from "./args/AccountMakerBalancesArgs";
import { AccountOffersArgs } from "./args/AccountOffersArgs";
import { AccountOrdersArgs } from "./args/AccountOrdersArgs";
import { AccountOwnedTakerApprovalsArgs } from "./args/AccountOwnedTakerApprovalsArgs";
import { AccountSpenderTakerApprovalsArgs } from "./args/AccountSpenderTakerApprovalsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Account)
export class AccountRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TakerApproval], {
    nullable: false
  })
  async ownedTakerApprovals(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AccountOwnedTakerApprovalsArgs): Promise<TakerApproval[]> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).ownedTakerApprovals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TakerApproval], {
    nullable: false
  })
  async spenderTakerApprovals(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AccountSpenderTakerApprovalsArgs): Promise<TakerApproval[]> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).spenderTakerApprovals(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Offer], {
    nullable: false
  })
  async offers(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AccountOffersArgs): Promise<Offer[]> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).offers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AccountOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => [MakerBalance], {
    nullable: false
  })
  async makerBalances(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AccountMakerBalancesArgs): Promise<MakerBalance[]> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        id: account.id,
      },
    }).makerBalances(args);
  }
}
