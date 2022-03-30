import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTakenOfferArgs } from "./args/AggregateTakenOfferArgs";
import { TakenOffer } from "../../../models/TakenOffer";
import { AggregateTakenOffer } from "../../outputs/AggregateTakenOffer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakenOffer)
export class AggregateTakenOfferResolver {
  @TypeGraphQL.Query(_returns => AggregateTakenOffer, {
    nullable: false
  })
  async aggregateTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTakenOfferArgs): Promise<AggregateTakenOffer> {
    return getPrismaFromContext(ctx).takenOffer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
