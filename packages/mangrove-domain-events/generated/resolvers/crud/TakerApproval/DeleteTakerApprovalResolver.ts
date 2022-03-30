import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteTakerApprovalArgs } from "./args/DeleteTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class DeleteTakerApprovalResolver {
  @TypeGraphQL.Mutation(_returns => TakerApproval, {
    nullable: true
  })
  async deleteTakerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTakerApprovalArgs): Promise<TakerApproval | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takerApproval.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
