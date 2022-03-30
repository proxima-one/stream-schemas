import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstMakerBalanceArgs } from "./args/FindFirstMakerBalanceArgs";
import { MakerBalance } from "../../../models/MakerBalance";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class FindFirstMakerBalanceResolver {
  @TypeGraphQL.Query(_returns => MakerBalance, {
    nullable: true
  })
  async findFirstMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
