import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMakerBalanceArgs } from "./args/AggregateMakerBalanceArgs";
import { CreateMakerBalanceArgs } from "./args/CreateMakerBalanceArgs";
import { CreateManyMakerBalanceArgs } from "./args/CreateManyMakerBalanceArgs";
import { DeleteMakerBalanceArgs } from "./args/DeleteMakerBalanceArgs";
import { DeleteManyMakerBalanceArgs } from "./args/DeleteManyMakerBalanceArgs";
import { FindFirstMakerBalanceArgs } from "./args/FindFirstMakerBalanceArgs";
import { FindManyMakerBalanceArgs } from "./args/FindManyMakerBalanceArgs";
import { FindUniqueMakerBalanceArgs } from "./args/FindUniqueMakerBalanceArgs";
import { GroupByMakerBalanceArgs } from "./args/GroupByMakerBalanceArgs";
import { UpdateMakerBalanceArgs } from "./args/UpdateMakerBalanceArgs";
import { UpdateManyMakerBalanceArgs } from "./args/UpdateManyMakerBalanceArgs";
import { UpsertMakerBalanceArgs } from "./args/UpsertMakerBalanceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MakerBalance } from "../../../models/MakerBalance";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMakerBalance } from "../../outputs/AggregateMakerBalance";
import { MakerBalanceGroupBy } from "../../outputs/MakerBalanceGroupBy";

@TypeGraphQL.Resolver(_of => MakerBalance)
export class MakerBalanceCrudResolver {
  @TypeGraphQL.Query(_returns => MakerBalance, {
    nullable: true
  })
  async makerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MakerBalance, {
    nullable: true
  })
  async findFirstMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MakerBalance], {
    nullable: false
  })
  async makerBalances(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMakerBalanceArgs): Promise<MakerBalance[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MakerBalance, {
    nullable: false
  })
  async createMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateMakerBalanceArgs): Promise<MakerBalance> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMakerBalanceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MakerBalance, {
    nullable: true
  })
  async deleteMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MakerBalance, {
    nullable: true
  })
  async updateMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateMakerBalanceArgs): Promise<MakerBalance | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMakerBalanceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMakerBalanceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MakerBalance, {
    nullable: false
  })
  async upsertMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertMakerBalanceArgs): Promise<MakerBalance> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateMakerBalance, {
    nullable: false
  })
  async aggregateMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMakerBalanceArgs): Promise<AggregateMakerBalance> {
    return getPrismaFromContext(ctx).makerBalance.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [MakerBalanceGroupBy], {
    nullable: false
  })
  async groupByMakerBalance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMakerBalanceArgs): Promise<MakerBalanceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).makerBalance.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
