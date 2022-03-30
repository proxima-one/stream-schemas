import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateTakerApprovalArgs } from "./args/UpdateTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class UpdateTakerApprovalResolver {
  @TypeGraphQL.Mutation(_returns => TakerApproval, {
    nullable: true
  })
  async updateTakerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTakerApprovalArgs): Promise<TakerApproval | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takerApproval.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
