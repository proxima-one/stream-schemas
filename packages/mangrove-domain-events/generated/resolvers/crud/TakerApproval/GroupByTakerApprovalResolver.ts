import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTakerApprovalArgs } from "./args/GroupByTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { TakerApprovalGroupBy } from "../../outputs/TakerApprovalGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class GroupByTakerApprovalResolver {
  @TypeGraphQL.Query(_returns => [TakerApprovalGroupBy], {
    nullable: false
  })
  async groupByTakerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTakerApprovalArgs): Promise<TakerApprovalGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takerApproval.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
