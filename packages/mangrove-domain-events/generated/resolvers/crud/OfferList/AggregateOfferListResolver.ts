import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOfferListArgs } from "./args/AggregateOfferListArgs";
import { OfferList } from "../../../models/OfferList";
import { AggregateOfferList } from "../../outputs/AggregateOfferList";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OfferList)
export class AggregateOfferListResolver {
  @TypeGraphQL.Query(_returns => AggregateOfferList, {
    nullable: false
  })
  async aggregateOfferList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfferListArgs): Promise<AggregateOfferList> {
    return getPrismaFromContext(ctx).offerList.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
