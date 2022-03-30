import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTakerApprovalArgs } from "./args/FindUniqueTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class FindUniqueTakerApprovalResolver {
  @TypeGraphQL.Query(_returns => TakerApproval, {
    nullable: true
  })
  async takerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTakerApprovalArgs): Promise<TakerApproval | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takerApproval.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
