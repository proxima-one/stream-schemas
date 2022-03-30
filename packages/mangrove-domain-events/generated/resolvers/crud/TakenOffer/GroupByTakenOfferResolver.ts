import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTakenOfferArgs } from "./args/GroupByTakenOfferArgs";
import { TakenOffer } from "../../../models/TakenOffer";
import { TakenOfferGroupBy } from "../../outputs/TakenOfferGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakenOffer)
export class GroupByTakenOfferResolver {
  @TypeGraphQL.Query(_returns => [TakenOfferGroupBy], {
    nullable: false
  })
  async groupByTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTakenOfferArgs): Promise<TakenOfferGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
