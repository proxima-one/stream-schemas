import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { TakenOffer } from "../../../models/TakenOffer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TakenOffer)
export class TakenOfferRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Order, {
    nullable: false
  })
  async order(@TypeGraphQL.Root() takenOffer: TakenOffer, @TypeGraphQL.Ctx() ctx: any): Promise<Order> {
    return getPrismaFromContext(ctx).takenOffer.findUnique({
      where: {
        id: takenOffer.id,
      },
    }).order({});
  }
}
