import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTakenOfferArgs } from "./args/AggregateTakenOfferArgs";
import { CreateManyTakenOfferArgs } from "./args/CreateManyTakenOfferArgs";
import { CreateTakenOfferArgs } from "./args/CreateTakenOfferArgs";
import { DeleteManyTakenOfferArgs } from "./args/DeleteManyTakenOfferArgs";
import { DeleteTakenOfferArgs } from "./args/DeleteTakenOfferArgs";
import { FindFirstTakenOfferArgs } from "./args/FindFirstTakenOfferArgs";
import { FindManyTakenOfferArgs } from "./args/FindManyTakenOfferArgs";
import { FindUniqueTakenOfferArgs } from "./args/FindUniqueTakenOfferArgs";
import { GroupByTakenOfferArgs } from "./args/GroupByTakenOfferArgs";
import { UpdateManyTakenOfferArgs } from "./args/UpdateManyTakenOfferArgs";
import { UpdateTakenOfferArgs } from "./args/UpdateTakenOfferArgs";
import { UpsertTakenOfferArgs } from "./args/UpsertTakenOfferArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TakenOffer } from "../../../models/TakenOffer";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTakenOffer } from "../../outputs/AggregateTakenOffer";
import { TakenOfferGroupBy } from "../../outputs/TakenOfferGroupBy";

@TypeGraphQL.Resolver(_of => TakenOffer)
export class TakenOfferCrudResolver {
  @TypeGraphQL.Query(_returns => TakenOffer, {
    nullable: true
  })
  async takenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTakenOfferArgs): Promise<TakenOffer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TakenOffer, {
    nullable: true
  })
  async findFirstTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTakenOfferArgs): Promise<TakenOffer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TakenOffer], {
    nullable: false
  })
  async takenOffers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTakenOfferArgs): Promise<TakenOffer[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TakenOffer, {
    nullable: false
  })
  async createTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTakenOfferArgs): Promise<TakenOffer> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTakenOfferArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TakenOffer, {
    nullable: true
  })
  async deleteTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTakenOfferArgs): Promise<TakenOffer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTakenOfferArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTakenOfferArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateTakenOffer, {
    nullable: false
  })
  async aggregateTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTakenOfferArgs): Promise<AggregateTakenOffer> {
    return getPrismaFromContext(ctx).takenOffer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [TakenOfferGroupBy], {
    nullable: false
  })
  async groupByTakenOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTakenOfferArgs): Promise<TakenOfferGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).takenOffer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
