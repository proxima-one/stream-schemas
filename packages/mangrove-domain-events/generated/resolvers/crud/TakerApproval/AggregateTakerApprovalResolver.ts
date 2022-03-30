import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTakerApprovalArgs } from "./args/AggregateTakerApprovalArgs";
import { TakerApproval } from "../../../models/TakerApproval";
import { AggregateTakerApproval } from "../../outputs/AggregateTakerApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakerApproval)
export class AggregateTakerApprovalResolver {
  @TypeGraphQL.Query(_returns => AggregateTakerApproval, {
    nullable: false
  })
  async aggregateTakerApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTakerApprovalArgs): Promise<AggregateTakerApproval> {
    return getPrismaFromContext(ctx).takerApproval.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
