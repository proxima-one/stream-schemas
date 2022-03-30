import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMangroveArgs } from "./args/AggregateMangroveArgs";
import { Mangrove } from "../../../models/Mangrove";
import { AggregateMangrove } from "../../outputs/AggregateMangrove";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mangrove)
export class AggregateMangroveResolver {
  @TypeGraphQL.Query(_returns => AggregateMangrove, {
    nullable: false
  })
  async aggregateMangrove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMangroveArgs): Promise<AggregateMangrove> {
    return getPrismaFromContext(ctx).mangrove.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
