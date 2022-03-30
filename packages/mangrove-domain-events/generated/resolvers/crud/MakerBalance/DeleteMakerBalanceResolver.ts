import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteMakerBalanceArgs } from "./args/DeleteMakerBalanceArgs";
import { MakerBalance } from "../../../models/MakerBalance";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class DeleteMakerBalanceResolver {
  @TypeGraphQL.Mutation(_returns => MakerBalance, {
    nullable: true
  })
  async deleteMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
