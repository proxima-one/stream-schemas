import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMakerBalanceArgs } from "./args/AggregateMakerBalanceArgs";
import { MakerBalance } from "../../../models/MakerBalance";
import { AggregateMakerBalance } from "../../outputs/AggregateMakerBalance";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class AggregateMakerBalanceResolver {
  @TypeGraphQL.Query(_returns => AggregateMakerBalance, {
    nullable: false
  })
  async aggregateMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMakerBalanceArgs): Promise<AggregateMakerBalance> {
    return getPrismaFromContext(ctx).makerBalance.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
