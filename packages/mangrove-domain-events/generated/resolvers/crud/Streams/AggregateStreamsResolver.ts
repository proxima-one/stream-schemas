import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStreamsArgs } from "./args/AggregateStreamsArgs";
import { Streams } from "../../../models/Streams";
import { AggregateStreams } from "../../outputs/AggregateStreams";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Streams)
export class AggregateStreamsResolver {
  @TypeGraphQL.Query(_returns => AggregateStreams, {
    nullable: false
  })
  async aggregateStreams(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStreamsArgs): Promise<AggregateStreams> {
    return getPrismaFromContext(ctx).streams.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
