import * as TypeGraphQL from "type-graphql";
import { Chain } from "../../../models/Chain";
import { Mangrove } from "../../../models/Mangrove";
import { Token } from "../../../models/Token";
import { ChainMangrovesArgs } from "./args/ChainMangrovesArgs";
import { ChainTokensArgs } from "./args/ChainTokensArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chain)
export class ChainRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Mangrove], {
    nullable: false
  })
  async mangroves(@TypeGraphQL.Root() chain: Chain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChainMangrovesArgs): Promise<Mangrove[]> {
    return getPrismaFromContext(ctx).chain.findUnique({
      where: {
        id: chain.id,
      },
    }).mangroves(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Token], {
    nullable: false
  })
  async tokens(@TypeGraphQL.Root() chain: Chain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChainTokensArgs): Promise<Token[]> {
    return getPrismaFromContext(ctx).chain.findUnique({
      where: {
        id: chain.id,
      },
    }).tokens(args);
  }
}
