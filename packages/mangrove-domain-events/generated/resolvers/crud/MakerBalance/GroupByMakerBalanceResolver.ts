import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMakerBalanceArgs } from "./args/GroupByMakerBalanceArgs";
import { MakerBalance } from "../../../models/MakerBalance";
import { MakerBalanceGroupBy } from "../../outputs/MakerBalanceGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class GroupByMakerBalanceResolver {
  @TypeGraphQL.Query(_returns => [MakerBalanceGroupBy], {
    nullable: false
  })
  async groupByMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMakerBalanceArgs): Promise<MakerBalanceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
