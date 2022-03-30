import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTakerApprovalArgs } from "./args/CreateTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class CreateTakerApprovalResolver {
  @TypeGraphQL.Mutation(_returns => TakerApproval, {
    nullable: false
  })
  async createTakerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTakerApprovalArgs): Promise<TakerApproval> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takerApproval.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
