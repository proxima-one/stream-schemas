import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMakerBalanceArgs } from "./args/FindUniqueMakerBalanceArgs";
import { MakerBalance } from "../../../models/MakerBalance";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class FindUniqueMakerBalanceResolver {
  @TypeGraphQL.Query(_returns => MakerBalance, {
    nullable: true
  })
  async makerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
