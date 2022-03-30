import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTakerApprovalArgs } from "./args/FindFirstTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class FindFirstTakerApprovalResolver {
  @TypeGraphQL.Query(_returns => TakerApproval, {
    nullable: true
  })
  async findFirstTakerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTakerApprovalArgs): Promise<TakerApproval | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takerApproval.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
