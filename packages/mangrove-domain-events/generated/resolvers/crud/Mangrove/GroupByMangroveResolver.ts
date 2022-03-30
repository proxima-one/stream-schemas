import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMangroveArgs } from "./args/GroupByMangroveArgs";
import { Mangrove } from "../../../models/Mangrove";
import { MangroveGroupBy } from "../../outputs/MangroveGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mangrove)
export class GroupByMangroveResolver {
  @TypeGraphQL.Query(_returns => [MangroveGroupBy], {
    nullable: false
  })
  async groupByMangrove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMangroveArgs): Promise<MangroveGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mangrove.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
