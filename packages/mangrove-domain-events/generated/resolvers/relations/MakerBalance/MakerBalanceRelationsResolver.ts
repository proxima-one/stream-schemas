import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { MakerBalance } from "../../../models/MakerBalance";
import { Mangrove } from "../../../models/Mangrove";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class MakerBalanceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Mangrove, {
    nullable: false
  })
  async mangrove(@TypeGraphQL.Root() makerBalance: MakerBalance, @TypeGraphQL.Ctx() ctx: any): Promise<Mangrove> {
    return getPrismaFromContext(ctx).makerBalance.findUnique({
      where: {
        id: makerBalance.id,
      },
    }).mangrove({});
  }

  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: false
  })
  async maker(@TypeGraphQL.Root() makerBalance: MakerBalance, @TypeGraphQL.Ctx() ctx: any): Promise<Account> {
    return getPrismaFromContext(ctx).makerBalance.findUnique({
      where: {
        id: makerBalance.id,
      },
    }).maker({});
  }
}
