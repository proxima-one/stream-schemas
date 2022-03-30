import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTakenOfferArgs } from "./args/UpsertTakenOfferArgs";
import { TakenOffer } from "../../../models/TakenOffer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakenOffer)
export class UpsertTakenOfferResolver {
  @TypeGraphQL.Mutation(_returns => TakenOffer, {
    nullable: false
  })
  async upsertTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTakenOfferArgs): Promise<TakenOffer> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
