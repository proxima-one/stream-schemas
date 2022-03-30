import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateTakenOfferArgs } from "./args/UpdateTakenOfferArgs";
import { TakenOffer } from "../../../models/TakenOffer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakenOffer)
export class UpdateTakenOfferResolver {
  @TypeGraphQL.Mutation(_returns => TakenOffer, {
    nullable: true
  })
  async updateTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTakenOfferArgs): Promise<TakenOffer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
