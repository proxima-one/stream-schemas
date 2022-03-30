import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Chain: crudResolvers.ChainCrudResolver,
  Token: crudResolvers.TokenCrudResolver,
  Mangrove: crudResolvers.MangroveCrudResolver,
  Account: crudResolvers.AccountCrudResolver,
  TakerApproval: crudResolvers.TakerApprovalCrudResolver,
  MakerBalance: crudResolvers.MakerBalanceCrudResolver,
  OfferList: crudResolvers.OfferListCrudResolver,
  Offer: crudResolvers.OfferCrudResolver,
  Order: crudResolvers.OrderCrudResolver,
  TakenOffer: crudResolvers.TakenOfferCrudResolver,
  Streams: crudResolvers.StreamsCrudResolver
};
const actionResolversMap = {
  Chain: {
    chain: actionResolvers.FindUniqueChainResolver,
    findFirstChain: actionResolvers.FindFirstChainResolver,
    chains: actionResolvers.FindManyChainResolver,
    createChain: actionResolvers.CreateChainResolver,
    createManyChain: actionResolvers.CreateManyChainResolver,
    deleteChain: actionResolvers.DeleteChainResolver,
    updateChain: actionResolvers.UpdateChainResolver,
    deleteManyChain: actionResolvers.DeleteManyChainResolver,
    updateManyChain: actionResolvers.UpdateManyChainResolver,
    upsertChain: actionResolvers.UpsertChainResolver,
    aggregateChain: actionResolvers.AggregateChainResolver,
    groupByChain: actionResolvers.GroupByChainResolver
  },
  Token: {
    token: actionResolvers.FindUniqueTokenResolver,
    findFirstToken: actionResolvers.FindFirstTokenResolver,
    tokens: actionResolvers.FindManyTokenResolver,
    createToken: actionResolvers.CreateTokenResolver,
    createManyToken: actionResolvers.CreateManyTokenResolver,
    deleteToken: actionResolvers.DeleteTokenResolver,
    updateToken: actionResolvers.UpdateTokenResolver,
    deleteManyToken: actionResolvers.DeleteManyTokenResolver,
    updateManyToken: actionResolvers.UpdateManyTokenResolver,
    upsertToken: actionResolvers.UpsertTokenResolver,
    aggregateToken: actionResolvers.AggregateTokenResolver,
    groupByToken: actionResolvers.GroupByTokenResolver
  },
  Mangrove: {
    mangrove: actionResolvers.FindUniqueMangroveResolver,
    findFirstMangrove: actionResolvers.FindFirstMangroveResolver,
    mangroves: actionResolvers.FindManyMangroveResolver,
    createMangrove: actionResolvers.CreateMangroveResolver,
    createManyMangrove: actionResolvers.CreateManyMangroveResolver,
    deleteMangrove: actionResolvers.DeleteMangroveResolver,
    updateMangrove: actionResolvers.UpdateMangroveResolver,
    deleteManyMangrove: actionResolvers.DeleteManyMangroveResolver,
    updateManyMangrove: actionResolvers.UpdateManyMangroveResolver,
    upsertMangrove: actionResolvers.UpsertMangroveResolver,
    aggregateMangrove: actionResolvers.AggregateMangroveResolver,
    groupByMangrove: actionResolvers.GroupByMangroveResolver
  },
  Account: {
    account: actionResolvers.FindUniqueAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    createAccount: actionResolvers.CreateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    deleteAccount: actionResolvers.DeleteAccountResolver,
    updateAccount: actionResolvers.UpdateAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    upsertAccount: actionResolvers.UpsertAccountResolver,
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver
  },
  TakerApproval: {
    takerApproval: actionResolvers.FindUniqueTakerApprovalResolver,
    findFirstTakerApproval: actionResolvers.FindFirstTakerApprovalResolver,
    takerApprovals: actionResolvers.FindManyTakerApprovalResolver,
    createTakerApproval: actionResolvers.CreateTakerApprovalResolver,
    createManyTakerApproval: actionResolvers.CreateManyTakerApprovalResolver,
    deleteTakerApproval: actionResolvers.DeleteTakerApprovalResolver,
    updateTakerApproval: actionResolvers.UpdateTakerApprovalResolver,
    deleteManyTakerApproval: actionResolvers.DeleteManyTakerApprovalResolver,
    updateManyTakerApproval: actionResolvers.UpdateManyTakerApprovalResolver,
    upsertTakerApproval: actionResolvers.UpsertTakerApprovalResolver,
    aggregateTakerApproval: actionResolvers.AggregateTakerApprovalResolver,
    groupByTakerApproval: actionResolvers.GroupByTakerApprovalResolver
  },
  MakerBalance: {
    makerBalance: actionResolvers.FindUniqueMakerBalanceResolver,
    findFirstMakerBalance: actionResolvers.FindFirstMakerBalanceResolver,
    makerBalances: actionResolvers.FindManyMakerBalanceResolver,
    createMakerBalance: actionResolvers.CreateMakerBalanceResolver,
    createManyMakerBalance: actionResolvers.CreateManyMakerBalanceResolver,
    deleteMakerBalance: actionResolvers.DeleteMakerBalanceResolver,
    updateMakerBalance: actionResolvers.UpdateMakerBalanceResolver,
    deleteManyMakerBalance: actionResolvers.DeleteManyMakerBalanceResolver,
    updateManyMakerBalance: actionResolvers.UpdateManyMakerBalanceResolver,
    upsertMakerBalance: actionResolvers.UpsertMakerBalanceResolver,
    aggregateMakerBalance: actionResolvers.AggregateMakerBalanceResolver,
    groupByMakerBalance: actionResolvers.GroupByMakerBalanceResolver
  },
  OfferList: {
    offerList: actionResolvers.FindUniqueOfferListResolver,
    findFirstOfferList: actionResolvers.FindFirstOfferListResolver,
    offerLists: actionResolvers.FindManyOfferListResolver,
    createOfferList: actionResolvers.CreateOfferListResolver,
    createManyOfferList: actionResolvers.CreateManyOfferListResolver,
    deleteOfferList: actionResolvers.DeleteOfferListResolver,
    updateOfferList: actionResolvers.UpdateOfferListResolver,
    deleteManyOfferList: actionResolvers.DeleteManyOfferListResolver,
    updateManyOfferList: actionResolvers.UpdateManyOfferListResolver,
    upsertOfferList: actionResolvers.UpsertOfferListResolver,
    aggregateOfferList: actionResolvers.AggregateOfferListResolver,
    groupByOfferList: actionResolvers.GroupByOfferListResolver
  },
  Offer: {
    offer: actionResolvers.FindUniqueOfferResolver,
    findFirstOffer: actionResolvers.FindFirstOfferResolver,
    offers: actionResolvers.FindManyOfferResolver,
    createOffer: actionResolvers.CreateOfferResolver,
    createManyOffer: actionResolvers.CreateManyOfferResolver,
    deleteOffer: actionResolvers.DeleteOfferResolver,
    updateOffer: actionResolvers.UpdateOfferResolver,
    deleteManyOffer: actionResolvers.DeleteManyOfferResolver,
    updateManyOffer: actionResolvers.UpdateManyOfferResolver,
    upsertOffer: actionResolvers.UpsertOfferResolver,
    aggregateOffer: actionResolvers.AggregateOfferResolver,
    groupByOffer: actionResolvers.GroupByOfferResolver
  },
  Order: {
    order: actionResolvers.FindUniqueOrderResolver,
    findFirstOrder: actionResolvers.FindFirstOrderResolver,
    orders: actionResolvers.FindManyOrderResolver,
    createOrder: actionResolvers.CreateOrderResolver,
    createManyOrder: actionResolvers.CreateManyOrderResolver,
    deleteOrder: actionResolvers.DeleteOrderResolver,
    updateOrder: actionResolvers.UpdateOrderResolver,
    deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
    updateManyOrder: actionResolvers.UpdateManyOrderResolver,
    upsertOrder: actionResolvers.UpsertOrderResolver,
    aggregateOrder: actionResolvers.AggregateOrderResolver,
    groupByOrder: actionResolvers.GroupByOrderResolver
  },
  TakenOffer: {
    takenOffer: actionResolvers.FindUniqueTakenOfferResolver,
    findFirstTakenOffer: actionResolvers.FindFirstTakenOfferResolver,
    takenOffers: actionResolvers.FindManyTakenOfferResolver,
    createTakenOffer: actionResolvers.CreateTakenOfferResolver,
    createManyTakenOffer: actionResolvers.CreateManyTakenOfferResolver,
    deleteTakenOffer: actionResolvers.DeleteTakenOfferResolver,
    updateTakenOffer: actionResolvers.UpdateTakenOfferResolver,
    deleteManyTakenOffer: actionResolvers.DeleteManyTakenOfferResolver,
    updateManyTakenOffer: actionResolvers.UpdateManyTakenOfferResolver,
    upsertTakenOffer: actionResolvers.UpsertTakenOfferResolver,
    aggregateTakenOffer: actionResolvers.AggregateTakenOfferResolver,
    groupByTakenOffer: actionResolvers.GroupByTakenOfferResolver
  },
  Streams: {
    findUniqueStreams: actionResolvers.FindUniqueStreamsResolver,
    findFirstStreams: actionResolvers.FindFirstStreamsResolver,
    findManyStreams: actionResolvers.FindManyStreamsResolver,
    createStreams: actionResolvers.CreateStreamsResolver,
    createManyStreams: actionResolvers.CreateManyStreamsResolver,
    deleteStreams: actionResolvers.DeleteStreamsResolver,
    updateStreams: actionResolvers.UpdateStreamsResolver,
    deleteManyStreams: actionResolvers.DeleteManyStreamsResolver,
    updateManyStreams: actionResolvers.UpdateManyStreamsResolver,
    upsertStreams: actionResolvers.UpsertStreamsResolver,
    aggregateStreams: actionResolvers.AggregateStreamsResolver,
    groupByStreams: actionResolvers.GroupByStreamsResolver
  }
};
const crudResolversInfo = {
  Chain: ["chain", "findFirstChain", "chains", "createChain", "createManyChain", "deleteChain", "updateChain", "deleteManyChain", "updateManyChain", "upsertChain", "aggregateChain", "groupByChain"],
  Token: ["token", "findFirstToken", "tokens", "createToken", "createManyToken", "deleteToken", "updateToken", "deleteManyToken", "updateManyToken", "upsertToken", "aggregateToken", "groupByToken"],
  Mangrove: ["mangrove", "findFirstMangrove", "mangroves", "createMangrove", "createManyMangrove", "deleteMangrove", "updateMangrove", "deleteManyMangrove", "updateManyMangrove", "upsertMangrove", "aggregateMangrove", "groupByMangrove"],
  Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
  TakerApproval: ["takerApproval", "findFirstTakerApproval", "takerApprovals", "createTakerApproval", "createManyTakerApproval", "deleteTakerApproval", "updateTakerApproval", "deleteManyTakerApproval", "updateManyTakerApproval", "upsertTakerApproval", "aggregateTakerApproval", "groupByTakerApproval"],
  MakerBalance: ["makerBalance", "findFirstMakerBalance", "makerBalances", "createMakerBalance", "createManyMakerBalance", "deleteMakerBalance", "updateMakerBalance", "deleteManyMakerBalance", "updateManyMakerBalance", "upsertMakerBalance", "aggregateMakerBalance", "groupByMakerBalance"],
  OfferList: ["offerList", "findFirstOfferList", "offerLists", "createOfferList", "createManyOfferList", "deleteOfferList", "updateOfferList", "deleteManyOfferList", "updateManyOfferList", "upsertOfferList", "aggregateOfferList", "groupByOfferList"],
  Offer: ["offer", "findFirstOffer", "offers", "createOffer", "createManyOffer", "deleteOffer", "updateOffer", "deleteManyOffer", "updateManyOffer", "upsertOffer", "aggregateOffer", "groupByOffer"],
  Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"],
  TakenOffer: ["takenOffer", "findFirstTakenOffer", "takenOffers", "createTakenOffer", "createManyTakenOffer", "deleteTakenOffer", "updateTakenOffer", "deleteManyTakenOffer", "updateManyTakenOffer", "upsertTakenOffer", "aggregateTakenOffer", "groupByTakenOffer"],
  Streams: ["findUniqueStreams", "findFirstStreams", "findManyStreams", "createStreams", "createManyStreams", "deleteStreams", "updateStreams", "deleteManyStreams", "updateManyStreams", "upsertStreams", "aggregateStreams", "groupByStreams"]
};
const argsInfo = {
  FindUniqueChainArgs: ["where"],
  FindFirstChainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyChainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateChainArgs: ["data"],
  CreateManyChainArgs: ["data", "skipDuplicates"],
  DeleteChainArgs: ["where"],
  UpdateChainArgs: ["data", "where"],
  DeleteManyChainArgs: ["where"],
  UpdateManyChainArgs: ["data", "where"],
  UpsertChainArgs: ["where", "create", "update"],
  AggregateChainArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByChainArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTokenArgs: ["where"],
  FindFirstTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTokenArgs: ["data"],
  CreateManyTokenArgs: ["data", "skipDuplicates"],
  DeleteTokenArgs: ["where"],
  UpdateTokenArgs: ["data", "where"],
  DeleteManyTokenArgs: ["where"],
  UpdateManyTokenArgs: ["data", "where"],
  UpsertTokenArgs: ["where", "create", "update"],
  AggregateTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMangroveArgs: ["where"],
  FindFirstMangroveArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMangroveArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMangroveArgs: ["data"],
  CreateManyMangroveArgs: ["data", "skipDuplicates"],
  DeleteMangroveArgs: ["where"],
  UpdateMangroveArgs: ["data", "where"],
  DeleteManyMangroveArgs: ["where"],
  UpdateManyMangroveArgs: ["data", "where"],
  UpsertMangroveArgs: ["where", "create", "update"],
  AggregateMangroveArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMangroveArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAccountArgs: ["data"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  DeleteAccountArgs: ["where"],
  UpdateAccountArgs: ["data", "where"],
  DeleteManyAccountArgs: ["where"],
  UpdateManyAccountArgs: ["data", "where"],
  UpsertAccountArgs: ["where", "create", "update"],
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTakerApprovalArgs: ["where"],
  FindFirstTakerApprovalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTakerApprovalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTakerApprovalArgs: ["data"],
  CreateManyTakerApprovalArgs: ["data", "skipDuplicates"],
  DeleteTakerApprovalArgs: ["where"],
  UpdateTakerApprovalArgs: ["data", "where"],
  DeleteManyTakerApprovalArgs: ["where"],
  UpdateManyTakerApprovalArgs: ["data", "where"],
  UpsertTakerApprovalArgs: ["where", "create", "update"],
  AggregateTakerApprovalArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTakerApprovalArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMakerBalanceArgs: ["where"],
  FindFirstMakerBalanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMakerBalanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMakerBalanceArgs: ["data"],
  CreateManyMakerBalanceArgs: ["data", "skipDuplicates"],
  DeleteMakerBalanceArgs: ["where"],
  UpdateMakerBalanceArgs: ["data", "where"],
  DeleteManyMakerBalanceArgs: ["where"],
  UpdateManyMakerBalanceArgs: ["data", "where"],
  UpsertMakerBalanceArgs: ["where", "create", "update"],
  AggregateMakerBalanceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMakerBalanceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOfferListArgs: ["where"],
  FindFirstOfferListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOfferListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOfferListArgs: ["data"],
  CreateManyOfferListArgs: ["data", "skipDuplicates"],
  DeleteOfferListArgs: ["where"],
  UpdateOfferListArgs: ["data", "where"],
  DeleteManyOfferListArgs: ["where"],
  UpdateManyOfferListArgs: ["data", "where"],
  UpsertOfferListArgs: ["where", "create", "update"],
  AggregateOfferListArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOfferListArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOfferArgs: ["where"],
  FindFirstOfferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOfferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOfferArgs: ["data"],
  CreateManyOfferArgs: ["data", "skipDuplicates"],
  DeleteOfferArgs: ["where"],
  UpdateOfferArgs: ["data", "where"],
  DeleteManyOfferArgs: ["where"],
  UpdateManyOfferArgs: ["data", "where"],
  UpsertOfferArgs: ["where", "create", "update"],
  AggregateOfferArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOfferArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderArgs: ["where"],
  FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderArgs: ["data"],
  CreateManyOrderArgs: ["data", "skipDuplicates"],
  DeleteOrderArgs: ["where"],
  UpdateOrderArgs: ["data", "where"],
  DeleteManyOrderArgs: ["where"],
  UpdateManyOrderArgs: ["data", "where"],
  UpsertOrderArgs: ["where", "create", "update"],
  AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTakenOfferArgs: ["where"],
  FindFirstTakenOfferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTakenOfferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTakenOfferArgs: ["data"],
  CreateManyTakenOfferArgs: ["data", "skipDuplicates"],
  DeleteTakenOfferArgs: ["where"],
  UpdateTakenOfferArgs: ["data", "where"],
  DeleteManyTakenOfferArgs: ["where"],
  UpdateManyTakenOfferArgs: ["data", "where"],
  UpsertTakenOfferArgs: ["where", "create", "update"],
  AggregateTakenOfferArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTakenOfferArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueStreamsArgs: ["where"],
  FindFirstStreamsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStreamsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateStreamsArgs: ["data"],
  CreateManyStreamsArgs: ["data", "skipDuplicates"],
  DeleteStreamsArgs: ["where"],
  UpdateStreamsArgs: ["data", "where"],
  DeleteManyStreamsArgs: ["where"],
  UpdateManyStreamsArgs: ["data", "where"],
  UpsertStreamsArgs: ["where", "create", "update"],
  AggregateStreamsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByStreamsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Chain: relationResolvers.ChainRelationsResolver,
  Token: relationResolvers.TokenRelationsResolver,
  Mangrove: relationResolvers.MangroveRelationsResolver,
  Account: relationResolvers.AccountRelationsResolver,
  TakerApproval: relationResolvers.TakerApprovalRelationsResolver,
  MakerBalance: relationResolvers.MakerBalanceRelationsResolver,
  OfferList: relationResolvers.OfferListRelationsResolver,
  Offer: relationResolvers.OfferRelationsResolver,
  Order: relationResolvers.OrderRelationsResolver,
  TakenOffer: relationResolvers.TakenOfferRelationsResolver
};
const relationResolversInfo = {
  Chain: ["mangroves", "tokens"],
  Token: ["chain", "offerListsWhereInbound", "offerListsWhereOutbound"],
  Mangrove: ["chain", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  Account: ["ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  TakerApproval: ["mangrove", "offerList", "owner", "spender"],
  MakerBalance: ["mangrove", "maker"],
  OfferList: ["mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  Offer: ["mangrove", "offerList", "maker"],
  Order: ["takenOffers", "mangrove", "offerList", "taker"],
  TakenOffer: ["order"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Chain: ["id", "name"],
  Token: ["id", "chainId", "symbol", "name", "decimals"],
  Mangrove: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  Account: ["id", "address"],
  TakerApproval: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  MakerBalance: ["id", "mangroveId", "makerId", "balance"],
  OfferList: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  Offer: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  Order: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  TakenOffer: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  Streams: ["id", "state"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateChain: ["_count", "_avg", "_sum", "_min", "_max"],
  ChainGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateToken: ["_count", "_avg", "_sum", "_min", "_max"],
  TokenGroupBy: ["id", "chainId", "symbol", "name", "decimals", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMangrove: ["_count", "_avg", "_sum", "_min", "_max"],
  MangroveGroupBy: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAccount: ["_count", "_min", "_max"],
  AccountGroupBy: ["id", "address", "_count", "_min", "_max"],
  AggregateTakerApproval: ["_count", "_min", "_max"],
  TakerApprovalGroupBy: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value", "_count", "_min", "_max"],
  AggregateMakerBalance: ["_count", "_min", "_max"],
  MakerBalanceGroupBy: ["id", "mangroveId", "makerId", "balance", "_count", "_min", "_max"],
  AggregateOfferList: ["_count", "_avg", "_sum", "_min", "_max"],
  OfferListGroupBy: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOffer: ["_count", "_avg", "_sum", "_min", "_max"],
  OfferGroupBy: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderGroupBy: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTakenOffer: ["_count", "_avg", "_sum", "_min", "_max"],
  TakenOfferGroupBy: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStreams: ["_count", "_min", "_max"],
  StreamsGroupBy: ["id", "state", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ChainCount: ["mangroves", "tokens"],
  ChainCountAggregate: ["id", "name", "_all"],
  ChainAvgAggregate: ["id"],
  ChainSumAggregate: ["id"],
  ChainMinAggregate: ["id", "name"],
  ChainMaxAggregate: ["id", "name"],
  TokenCount: ["offerListsWhereInbound", "offerListsWhereOutbound"],
  TokenCountAggregate: ["id", "chainId", "symbol", "name", "decimals", "_all"],
  TokenAvgAggregate: ["chainId", "decimals"],
  TokenSumAggregate: ["chainId", "decimals"],
  TokenMinAggregate: ["id", "chainId", "symbol", "name", "decimals"],
  TokenMaxAggregate: ["id", "chainId", "symbol", "name", "decimals"],
  MangroveCount: ["offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveCountAggregate: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "_all"],
  MangroveAvgAggregate: ["chainId", "gasmax", "gasprice"],
  MangroveSumAggregate: ["chainId", "gasmax", "gasprice"],
  MangroveMinAggregate: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  MangroveMaxAggregate: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  AccountCount: ["ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountCountAggregate: ["id", "address", "_all"],
  AccountMinAggregate: ["id", "address"],
  AccountMaxAggregate: ["id", "address"],
  TakerApprovalCountAggregate: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value", "_all"],
  TakerApprovalMinAggregate: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  TakerApprovalMaxAggregate: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  MakerBalanceCountAggregate: ["id", "mangroveId", "makerId", "balance", "_all"],
  MakerBalanceMinAggregate: ["id", "mangroveId", "makerId", "balance"],
  MakerBalanceMaxAggregate: ["id", "mangroveId", "makerId", "balance"],
  OfferListCount: ["offers", "takerApprovals", "orders"],
  OfferListCountAggregate: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density", "_all"],
  OfferListAvgAggregate: ["gasbase"],
  OfferListSumAggregate: ["gasbase"],
  OfferListMinAggregate: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListMaxAggregate: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferCountAggregate: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "_all"],
  OfferAvgAggregate: ["blockNumber", "wantsNumber", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq"],
  OfferSumAggregate: ["blockNumber", "wantsNumber", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq"],
  OfferMinAggregate: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OfferMaxAggregate: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OrderCount: ["takenOffers"],
  OrderCountAggregate: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "_all"],
  OrderAvgAggregate: ["blockNumber", "takerGotNumber", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice"],
  OrderSumAggregate: ["blockNumber", "takerGotNumber", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice"],
  OrderMinAggregate: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  OrderMaxAggregate: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  TakenOfferCountAggregate: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "_all"],
  TakenOfferAvgAggregate: ["takerWantsNumber", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice"],
  TakenOfferSumAggregate: ["takerWantsNumber", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice"],
  TakenOfferMinAggregate: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferMaxAggregate: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  StreamsCountAggregate: ["id", "state", "_all"],
  StreamsMinAggregate: ["id", "state"],
  StreamsMaxAggregate: ["id", "state"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  ChainWhereInput: ["AND", "OR", "NOT", "id", "name", "mangroves", "tokens"],
  ChainOrderByWithRelationInput: ["id", "name", "mangroves", "tokens"],
  ChainWhereUniqueInput: ["id"],
  ChainOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  ChainScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  TokenWhereInput: ["AND", "OR", "NOT", "id", "chainId", "symbol", "name", "decimals", "chain", "offerListsWhereInbound", "offerListsWhereOutbound"],
  TokenOrderByWithRelationInput: ["id", "chainId", "symbol", "name", "decimals", "chain", "offerListsWhereInbound", "offerListsWhereOutbound"],
  TokenWhereUniqueInput: ["id"],
  TokenOrderByWithAggregationInput: ["id", "chainId", "symbol", "name", "decimals", "_count", "_avg", "_max", "_min", "_sum"],
  TokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "chainId", "symbol", "name", "decimals"],
  MangroveWhereInput: ["AND", "OR", "NOT", "id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveOrderByWithRelationInput: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveWhereUniqueInput: ["id"],
  MangroveOrderByWithAggregationInput: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "_count", "_avg", "_max", "_min", "_sum"],
  MangroveScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  AccountWhereInput: ["AND", "OR", "NOT", "id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountOrderByWithRelationInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountWhereUniqueInput: ["id"],
  AccountOrderByWithAggregationInput: ["id", "address", "_count", "_max", "_min"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "address"],
  TakerApprovalWhereInput: ["AND", "OR", "NOT", "id", "mangroveId", "offerListId", "ownerId", "spenderId", "value", "mangrove", "offerList", "owner", "spender"],
  TakerApprovalOrderByWithRelationInput: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value", "mangrove", "offerList", "owner", "spender"],
  TakerApprovalWhereUniqueInput: ["id"],
  TakerApprovalOrderByWithAggregationInput: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value", "_count", "_max", "_min"],
  TakerApprovalScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  MakerBalanceWhereInput: ["AND", "OR", "NOT", "id", "mangroveId", "makerId", "balance", "mangrove", "maker"],
  MakerBalanceOrderByWithRelationInput: ["id", "mangroveId", "makerId", "balance", "mangrove", "maker"],
  MakerBalanceWhereUniqueInput: ["id"],
  MakerBalanceOrderByWithAggregationInput: ["id", "mangroveId", "makerId", "balance", "_count", "_max", "_min"],
  MakerBalanceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "mangroveId", "makerId", "balance"],
  OfferListWhereInput: ["AND", "OR", "NOT", "id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListOrderByWithRelationInput: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListWhereUniqueInput: ["id"],
  OfferListOrderByWithAggregationInput: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density", "_count", "_avg", "_max", "_min", "_sum"],
  OfferListScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferWhereInput: ["AND", "OR", "NOT", "id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "offerList", "maker"],
  OfferOrderByWithRelationInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "offerList", "maker"],
  OfferWhereUniqueInput: ["id"],
  OfferOrderByWithAggregationInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "_count", "_avg", "_max", "_min", "_sum"],
  OfferScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OrderWhereInput: ["AND", "OR", "NOT", "id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "offerList", "taker"],
  OrderOrderByWithRelationInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "offerList", "taker"],
  OrderWhereUniqueInput: ["id"],
  OrderOrderByWithAggregationInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "_count", "_avg", "_max", "_min", "_sum"],
  OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  TakenOfferWhereInput: ["AND", "OR", "NOT", "id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "order"],
  TakenOfferOrderByWithRelationInput: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "order"],
  TakenOfferWhereUniqueInput: ["id"],
  TakenOfferOrderByWithAggregationInput: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "_count", "_avg", "_max", "_min", "_sum"],
  TakenOfferScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  StreamsWhereInput: ["AND", "OR", "NOT", "id", "state"],
  StreamsOrderByWithRelationInput: ["id", "state"],
  StreamsWhereUniqueInput: ["id"],
  StreamsOrderByWithAggregationInput: ["id", "state", "_count", "_max", "_min"],
  StreamsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "state"],
  ChainCreateInput: ["id", "name", "mangroves", "tokens"],
  ChainUpdateInput: ["id", "name", "mangroves", "tokens"],
  ChainCreateManyInput: ["id", "name"],
  ChainUpdateManyMutationInput: ["id", "name"],
  TokenCreateInput: ["id", "symbol", "name", "decimals", "chain", "offerListsWhereInbound", "offerListsWhereOutbound"],
  TokenUpdateInput: ["id", "symbol", "name", "decimals", "chain", "offerListsWhereInbound", "offerListsWhereOutbound"],
  TokenCreateManyInput: ["id", "chainId", "symbol", "name", "decimals"],
  TokenUpdateManyMutationInput: ["id", "symbol", "name", "decimals"],
  MangroveCreateInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveUpdateInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveCreateManyInput: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  MangroveUpdateManyMutationInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  AccountCreateInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountUpdateInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountCreateManyInput: ["id", "address"],
  AccountUpdateManyMutationInput: ["id", "address"],
  TakerApprovalCreateInput: ["id", "value", "mangrove", "offerList", "owner", "spender"],
  TakerApprovalUpdateInput: ["id", "value", "mangrove", "offerList", "owner", "spender"],
  TakerApprovalCreateManyInput: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  TakerApprovalUpdateManyMutationInput: ["id", "value"],
  MakerBalanceCreateInput: ["id", "balance", "mangrove", "maker"],
  MakerBalanceUpdateInput: ["id", "balance", "mangrove", "maker"],
  MakerBalanceCreateManyInput: ["id", "mangroveId", "makerId", "balance"],
  MakerBalanceUpdateManyMutationInput: ["id", "balance"],
  OfferListCreateInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListUpdateInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListCreateManyInput: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListUpdateManyMutationInput: ["id", "active", "fee", "gasbase", "density"],
  OfferCreateInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "offerList", "maker"],
  OfferUpdateInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "offerList", "maker"],
  OfferCreateManyInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OfferUpdateManyMutationInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OrderCreateInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "offerList", "taker"],
  OrderUpdateInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "offerList", "taker"],
  OrderCreateManyInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  OrderUpdateManyMutationInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  TakenOfferCreateInput: ["id", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "order"],
  TakenOfferUpdateInput: ["id", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason", "order"],
  TakenOfferCreateManyInput: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferUpdateManyMutationInput: ["id", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  StreamsCreateInput: ["id", "state"],
  StreamsUpdateInput: ["id", "state"],
  StreamsCreateManyInput: ["id", "state"],
  StreamsUpdateManyMutationInput: ["id", "state"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  MangroveListRelationFilter: ["every", "some", "none"],
  TokenListRelationFilter: ["every", "some", "none"],
  MangroveOrderByRelationAggregateInput: ["_count"],
  TokenOrderByRelationAggregateInput: ["_count"],
  ChainCountOrderByAggregateInput: ["id", "name"],
  ChainAvgOrderByAggregateInput: ["id"],
  ChainMaxOrderByAggregateInput: ["id", "name"],
  ChainMinOrderByAggregateInput: ["id", "name"],
  ChainSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  ChainRelationFilter: ["is", "isNot"],
  OfferListListRelationFilter: ["every", "some", "none"],
  OfferListOrderByRelationAggregateInput: ["_count"],
  TokenCountOrderByAggregateInput: ["id", "chainId", "symbol", "name", "decimals"],
  TokenAvgOrderByAggregateInput: ["chainId", "decimals"],
  TokenMaxOrderByAggregateInput: ["id", "chainId", "symbol", "name", "decimals"],
  TokenMinOrderByAggregateInput: ["id", "chainId", "symbol", "name", "decimals"],
  TokenSumOrderByAggregateInput: ["chainId", "decimals"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolNullableFilter: ["equals", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OfferListRelationFilter: ["is", "isNot"],
  OrderListRelationFilter: ["every", "some", "none"],
  MakerBalanceListRelationFilter: ["every", "some", "none"],
  TakerApprovalListRelationFilter: ["every", "some", "none"],
  OfferOrderByRelationAggregateInput: ["_count"],
  OrderOrderByRelationAggregateInput: ["_count"],
  MakerBalanceOrderByRelationAggregateInput: ["_count"],
  TakerApprovalOrderByRelationAggregateInput: ["_count"],
  MangroveCountOrderByAggregateInput: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  MangroveAvgOrderByAggregateInput: ["chainId", "gasmax", "gasprice"],
  MangroveMaxOrderByAggregateInput: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  MangroveMinOrderByAggregateInput: ["id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  MangroveSumOrderByAggregateInput: ["chainId", "gasmax", "gasprice"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  AccountCountOrderByAggregateInput: ["id", "address"],
  AccountMaxOrderByAggregateInput: ["id", "address"],
  AccountMinOrderByAggregateInput: ["id", "address"],
  MangroveRelationFilter: ["is", "isNot"],
  AccountRelationFilter: ["is", "isNot"],
  TakerApprovalCountOrderByAggregateInput: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  TakerApprovalMaxOrderByAggregateInput: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  TakerApprovalMinOrderByAggregateInput: ["id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  MakerBalanceCountOrderByAggregateInput: ["id", "mangroveId", "makerId", "balance"],
  MakerBalanceMaxOrderByAggregateInput: ["id", "mangroveId", "makerId", "balance"],
  MakerBalanceMinOrderByAggregateInput: ["id", "mangroveId", "makerId", "balance"],
  TokenRelationFilter: ["is", "isNot"],
  OfferListCountOrderByAggregateInput: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListAvgOrderByAggregateInput: ["gasbase"],
  OfferListMaxOrderByAggregateInput: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListMinOrderByAggregateInput: ["id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListSumOrderByAggregateInput: ["gasbase"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  OfferCountOrderByAggregateInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OfferAvgOrderByAggregateInput: ["blockNumber", "wantsNumber", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq"],
  OfferMaxOrderByAggregateInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OfferMinOrderByAggregateInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OfferSumOrderByAggregateInput: ["blockNumber", "wantsNumber", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  TakenOfferListRelationFilter: ["every", "some", "none"],
  TakenOfferOrderByRelationAggregateInput: ["_count"],
  OrderCountOrderByAggregateInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  OrderAvgOrderByAggregateInput: ["blockNumber", "takerGotNumber", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice"],
  OrderMaxOrderByAggregateInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  OrderMinOrderByAggregateInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  OrderSumOrderByAggregateInput: ["blockNumber", "takerGotNumber", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice"],
  OrderRelationFilter: ["is", "isNot"],
  TakenOfferCountOrderByAggregateInput: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferAvgOrderByAggregateInput: ["takerWantsNumber", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice"],
  TakenOfferMaxOrderByAggregateInput: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferMinOrderByAggregateInput: ["id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferSumOrderByAggregateInput: ["takerWantsNumber", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice"],
  StreamsCountOrderByAggregateInput: ["id", "state"],
  StreamsMaxOrderByAggregateInput: ["id", "state"],
  StreamsMinOrderByAggregateInput: ["id", "state"],
  MangroveCreateNestedManyWithoutChainInput: ["create", "connectOrCreate", "createMany", "connect"],
  TokenCreateNestedManyWithoutChainInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  StringFieldUpdateOperationsInput: ["set"],
  MangroveUpdateManyWithoutChainInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TokenUpdateManyWithoutChainInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ChainCreateNestedOneWithoutTokensInput: ["create", "connectOrCreate", "connect"],
  OfferListCreateNestedManyWithoutInboundTokenInput: ["create", "connectOrCreate", "createMany", "connect"],
  OfferListCreateNestedManyWithoutOutboundTokenInput: ["create", "connectOrCreate", "createMany", "connect"],
  ChainUpdateOneRequiredWithoutTokensInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferListUpdateManyWithoutInboundTokenInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OfferListUpdateManyWithoutOutboundTokenInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ChainCreateNestedOneWithoutMangrovesInput: ["create", "connectOrCreate", "connect"],
  OfferListCreateNestedManyWithoutMangroveInput: ["create", "connectOrCreate", "createMany", "connect"],
  OfferCreateNestedManyWithoutMangroveInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutMangroveInput: ["create", "connectOrCreate", "createMany", "connect"],
  MakerBalanceCreateNestedManyWithoutMangroveInput: ["create", "connectOrCreate", "createMany", "connect"],
  TakerApprovalCreateNestedManyWithoutMangroveInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ChainUpdateOneRequiredWithoutMangrovesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferListUpdateManyWithoutMangroveInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OfferUpdateManyWithoutMangroveInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutMangroveInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MakerBalanceUpdateManyWithoutMangroveInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TakerApprovalUpdateManyWithoutMangroveInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TakerApprovalCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  TakerApprovalCreateNestedManyWithoutSpenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  OfferCreateNestedManyWithoutMakerInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutTakerInput: ["create", "connectOrCreate", "createMany", "connect"],
  MakerBalanceCreateNestedManyWithoutMakerInput: ["create", "connectOrCreate", "createMany", "connect"],
  TakerApprovalUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TakerApprovalUpdateManyWithoutSpenderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OfferUpdateManyWithoutMakerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutTakerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MakerBalanceUpdateManyWithoutMakerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MangroveCreateNestedOneWithoutTakerApprovalsInput: ["create", "connectOrCreate", "connect"],
  OfferListCreateNestedOneWithoutTakerApprovalsInput: ["create", "connectOrCreate", "connect"],
  AccountCreateNestedOneWithoutOwnedTakerApprovalsInput: ["create", "connectOrCreate", "connect"],
  AccountCreateNestedOneWithoutSpenderTakerApprovalsInput: ["create", "connectOrCreate", "connect"],
  MangroveUpdateOneRequiredWithoutTakerApprovalsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferListUpdateOneRequiredWithoutTakerApprovalsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MangroveCreateNestedOneWithoutMakerBalancesInput: ["create", "connectOrCreate", "connect"],
  AccountCreateNestedOneWithoutMakerBalancesInput: ["create", "connectOrCreate", "connect"],
  MangroveUpdateOneRequiredWithoutMakerBalancesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountUpdateOneRequiredWithoutMakerBalancesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MangroveCreateNestedOneWithoutOfferListsInput: ["create", "connectOrCreate", "connect"],
  TokenCreateNestedOneWithoutOfferListsWhereInboundInput: ["create", "connectOrCreate", "connect"],
  TokenCreateNestedOneWithoutOfferListsWhereOutboundInput: ["create", "connectOrCreate", "connect"],
  OfferCreateNestedManyWithoutOfferListInput: ["create", "connectOrCreate", "createMany", "connect"],
  TakerApprovalCreateNestedManyWithoutOfferListInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutOfferListInput: ["create", "connectOrCreate", "createMany", "connect"],
  MangroveUpdateOneRequiredWithoutOfferListsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TokenUpdateOneRequiredWithoutOfferListsWhereInboundInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TokenUpdateOneRequiredWithoutOfferListsWhereOutboundInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferUpdateManyWithoutOfferListInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TakerApprovalUpdateManyWithoutOfferListInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutOfferListInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MangroveCreateNestedOneWithoutOffersInput: ["create", "connectOrCreate", "connect"],
  OfferListCreateNestedOneWithoutOffersInput: ["create", "connectOrCreate", "connect"],
  AccountCreateNestedOneWithoutOffersInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  MangroveUpdateOneRequiredWithoutOffersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferListUpdateOneRequiredWithoutOffersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountUpdateOneRequiredWithoutOffersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TakenOfferCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
  MangroveCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  OfferListCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  AccountCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  TakenOfferUpdateManyWithoutOrderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MangroveUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferListUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OrderCreateNestedOneWithoutTakenOffersInput: ["create", "connectOrCreate", "connect"],
  OrderUpdateOneRequiredWithoutTakenOffersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  MangroveCreateWithoutChainInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveCreateOrConnectWithoutChainInput: ["where", "create"],
  MangroveCreateManyChainInputEnvelope: ["data", "skipDuplicates"],
  TokenCreateWithoutChainInput: ["id", "symbol", "name", "decimals", "offerListsWhereInbound", "offerListsWhereOutbound"],
  TokenCreateOrConnectWithoutChainInput: ["where", "create"],
  TokenCreateManyChainInputEnvelope: ["data", "skipDuplicates"],
  MangroveUpsertWithWhereUniqueWithoutChainInput: ["where", "update", "create"],
  MangroveUpdateWithWhereUniqueWithoutChainInput: ["where", "data"],
  MangroveUpdateManyWithWhereWithoutChainInput: ["where", "data"],
  MangroveScalarWhereInput: ["AND", "OR", "NOT", "id", "chainId", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  TokenUpsertWithWhereUniqueWithoutChainInput: ["where", "update", "create"],
  TokenUpdateWithWhereUniqueWithoutChainInput: ["where", "data"],
  TokenUpdateManyWithWhereWithoutChainInput: ["where", "data"],
  TokenScalarWhereInput: ["AND", "OR", "NOT", "id", "chainId", "symbol", "name", "decimals"],
  ChainCreateWithoutTokensInput: ["id", "name", "mangroves"],
  ChainCreateOrConnectWithoutTokensInput: ["where", "create"],
  OfferListCreateWithoutInboundTokenInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListCreateOrConnectWithoutInboundTokenInput: ["where", "create"],
  OfferListCreateManyInboundTokenInputEnvelope: ["data", "skipDuplicates"],
  OfferListCreateWithoutOutboundTokenInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "offers", "takerApprovals", "orders"],
  OfferListCreateOrConnectWithoutOutboundTokenInput: ["where", "create"],
  OfferListCreateManyOutboundTokenInputEnvelope: ["data", "skipDuplicates"],
  ChainUpsertWithoutTokensInput: ["update", "create"],
  ChainUpdateWithoutTokensInput: ["id", "name", "mangroves"],
  OfferListUpsertWithWhereUniqueWithoutInboundTokenInput: ["where", "update", "create"],
  OfferListUpdateWithWhereUniqueWithoutInboundTokenInput: ["where", "data"],
  OfferListUpdateManyWithWhereWithoutInboundTokenInput: ["where", "data"],
  OfferListScalarWhereInput: ["AND", "OR", "NOT", "id", "mangroveId", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListUpsertWithWhereUniqueWithoutOutboundTokenInput: ["where", "update", "create"],
  OfferListUpdateWithWhereUniqueWithoutOutboundTokenInput: ["where", "data"],
  OfferListUpdateManyWithWhereWithoutOutboundTokenInput: ["where", "data"],
  ChainCreateWithoutMangrovesInput: ["id", "name", "tokens"],
  ChainCreateOrConnectWithoutMangrovesInput: ["where", "create"],
  OfferListCreateWithoutMangroveInput: ["id", "active", "fee", "gasbase", "density", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListCreateOrConnectWithoutMangroveInput: ["where", "create"],
  OfferListCreateManyMangroveInputEnvelope: ["data", "skipDuplicates"],
  OfferCreateWithoutMangroveInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "offerList", "maker"],
  OfferCreateOrConnectWithoutMangroveInput: ["where", "create"],
  OfferCreateManyMangroveInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutMangroveInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "offerList", "taker"],
  OrderCreateOrConnectWithoutMangroveInput: ["where", "create"],
  OrderCreateManyMangroveInputEnvelope: ["data", "skipDuplicates"],
  MakerBalanceCreateWithoutMangroveInput: ["id", "balance", "maker"],
  MakerBalanceCreateOrConnectWithoutMangroveInput: ["where", "create"],
  MakerBalanceCreateManyMangroveInputEnvelope: ["data", "skipDuplicates"],
  TakerApprovalCreateWithoutMangroveInput: ["id", "value", "offerList", "owner", "spender"],
  TakerApprovalCreateOrConnectWithoutMangroveInput: ["where", "create"],
  TakerApprovalCreateManyMangroveInputEnvelope: ["data", "skipDuplicates"],
  ChainUpsertWithoutMangrovesInput: ["update", "create"],
  ChainUpdateWithoutMangrovesInput: ["id", "name", "tokens"],
  OfferListUpsertWithWhereUniqueWithoutMangroveInput: ["where", "update", "create"],
  OfferListUpdateWithWhereUniqueWithoutMangroveInput: ["where", "data"],
  OfferListUpdateManyWithWhereWithoutMangroveInput: ["where", "data"],
  OfferUpsertWithWhereUniqueWithoutMangroveInput: ["where", "update", "create"],
  OfferUpdateWithWhereUniqueWithoutMangroveInput: ["where", "data"],
  OfferUpdateManyWithWhereWithoutMangroveInput: ["where", "data"],
  OfferScalarWhereInput: ["AND", "OR", "NOT", "id", "blockNumber", "time", "offerListId", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OrderUpsertWithWhereUniqueWithoutMangroveInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutMangroveInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutMangroveInput: ["where", "data"],
  OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "blockNumber", "time", "mangroveId", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  MakerBalanceUpsertWithWhereUniqueWithoutMangroveInput: ["where", "update", "create"],
  MakerBalanceUpdateWithWhereUniqueWithoutMangroveInput: ["where", "data"],
  MakerBalanceUpdateManyWithWhereWithoutMangroveInput: ["where", "data"],
  MakerBalanceScalarWhereInput: ["AND", "OR", "NOT", "id", "mangroveId", "makerId", "balance"],
  TakerApprovalUpsertWithWhereUniqueWithoutMangroveInput: ["where", "update", "create"],
  TakerApprovalUpdateWithWhereUniqueWithoutMangroveInput: ["where", "data"],
  TakerApprovalUpdateManyWithWhereWithoutMangroveInput: ["where", "data"],
  TakerApprovalScalarWhereInput: ["AND", "OR", "NOT", "id", "mangroveId", "offerListId", "ownerId", "spenderId", "value"],
  TakerApprovalCreateWithoutOwnerInput: ["id", "value", "mangrove", "offerList", "spender"],
  TakerApprovalCreateOrConnectWithoutOwnerInput: ["where", "create"],
  TakerApprovalCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  TakerApprovalCreateWithoutSpenderInput: ["id", "value", "mangrove", "offerList", "owner"],
  TakerApprovalCreateOrConnectWithoutSpenderInput: ["where", "create"],
  TakerApprovalCreateManySpenderInputEnvelope: ["data", "skipDuplicates"],
  OfferCreateWithoutMakerInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "offerList"],
  OfferCreateOrConnectWithoutMakerInput: ["where", "create"],
  OfferCreateManyMakerInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutTakerInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "offerList"],
  OrderCreateOrConnectWithoutTakerInput: ["where", "create"],
  OrderCreateManyTakerInputEnvelope: ["data", "skipDuplicates"],
  MakerBalanceCreateWithoutMakerInput: ["id", "balance", "mangrove"],
  MakerBalanceCreateOrConnectWithoutMakerInput: ["where", "create"],
  MakerBalanceCreateManyMakerInputEnvelope: ["data", "skipDuplicates"],
  TakerApprovalUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  TakerApprovalUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  TakerApprovalUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  TakerApprovalUpsertWithWhereUniqueWithoutSpenderInput: ["where", "update", "create"],
  TakerApprovalUpdateWithWhereUniqueWithoutSpenderInput: ["where", "data"],
  TakerApprovalUpdateManyWithWhereWithoutSpenderInput: ["where", "data"],
  OfferUpsertWithWhereUniqueWithoutMakerInput: ["where", "update", "create"],
  OfferUpdateWithWhereUniqueWithoutMakerInput: ["where", "data"],
  OfferUpdateManyWithWhereWithoutMakerInput: ["where", "data"],
  OrderUpsertWithWhereUniqueWithoutTakerInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutTakerInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutTakerInput: ["where", "data"],
  MakerBalanceUpsertWithWhereUniqueWithoutMakerInput: ["where", "update", "create"],
  MakerBalanceUpdateWithWhereUniqueWithoutMakerInput: ["where", "data"],
  MakerBalanceUpdateManyWithWhereWithoutMakerInput: ["where", "data"],
  MangroveCreateWithoutTakerApprovalsInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "makerBalances"],
  MangroveCreateOrConnectWithoutTakerApprovalsInput: ["where", "create"],
  OfferListCreateWithoutTakerApprovalsInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "orders"],
  OfferListCreateOrConnectWithoutTakerApprovalsInput: ["where", "create"],
  AccountCreateWithoutOwnedTakerApprovalsInput: ["id", "address", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountCreateOrConnectWithoutOwnedTakerApprovalsInput: ["where", "create"],
  AccountCreateWithoutSpenderTakerApprovalsInput: ["id", "address", "ownedTakerApprovals", "offers", "orders", "makerBalances"],
  AccountCreateOrConnectWithoutSpenderTakerApprovalsInput: ["where", "create"],
  MangroveUpsertWithoutTakerApprovalsInput: ["update", "create"],
  MangroveUpdateWithoutTakerApprovalsInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "makerBalances"],
  OfferListUpsertWithoutTakerApprovalsInput: ["update", "create"],
  OfferListUpdateWithoutTakerApprovalsInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "orders"],
  AccountUpsertWithoutOwnedTakerApprovalsInput: ["update", "create"],
  AccountUpdateWithoutOwnedTakerApprovalsInput: ["id", "address", "spenderTakerApprovals", "offers", "orders", "makerBalances"],
  AccountUpsertWithoutSpenderTakerApprovalsInput: ["update", "create"],
  AccountUpdateWithoutSpenderTakerApprovalsInput: ["id", "address", "ownedTakerApprovals", "offers", "orders", "makerBalances"],
  MangroveCreateWithoutMakerBalancesInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "takerApprovals"],
  MangroveCreateOrConnectWithoutMakerBalancesInput: ["where", "create"],
  AccountCreateWithoutMakerBalancesInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders"],
  AccountCreateOrConnectWithoutMakerBalancesInput: ["where", "create"],
  MangroveUpsertWithoutMakerBalancesInput: ["update", "create"],
  MangroveUpdateWithoutMakerBalancesInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "orders", "takerApprovals"],
  AccountUpsertWithoutMakerBalancesInput: ["update", "create"],
  AccountUpdateWithoutMakerBalancesInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "orders"],
  MangroveCreateWithoutOfferListsInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offers", "orders", "makerBalances", "takerApprovals"],
  MangroveCreateOrConnectWithoutOfferListsInput: ["where", "create"],
  TokenCreateWithoutOfferListsWhereInboundInput: ["id", "symbol", "name", "decimals", "chain", "offerListsWhereOutbound"],
  TokenCreateOrConnectWithoutOfferListsWhereInboundInput: ["where", "create"],
  TokenCreateWithoutOfferListsWhereOutboundInput: ["id", "symbol", "name", "decimals", "chain", "offerListsWhereInbound"],
  TokenCreateOrConnectWithoutOfferListsWhereOutboundInput: ["where", "create"],
  OfferCreateWithoutOfferListInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "maker"],
  OfferCreateOrConnectWithoutOfferListInput: ["where", "create"],
  OfferCreateManyOfferListInputEnvelope: ["data", "skipDuplicates"],
  TakerApprovalCreateWithoutOfferListInput: ["id", "value", "mangrove", "owner", "spender"],
  TakerApprovalCreateOrConnectWithoutOfferListInput: ["where", "create"],
  TakerApprovalCreateManyOfferListInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutOfferListInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "taker"],
  OrderCreateOrConnectWithoutOfferListInput: ["where", "create"],
  OrderCreateManyOfferListInputEnvelope: ["data", "skipDuplicates"],
  MangroveUpsertWithoutOfferListsInput: ["update", "create"],
  MangroveUpdateWithoutOfferListsInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offers", "orders", "makerBalances", "takerApprovals"],
  TokenUpsertWithoutOfferListsWhereInboundInput: ["update", "create"],
  TokenUpdateWithoutOfferListsWhereInboundInput: ["id", "symbol", "name", "decimals", "chain", "offerListsWhereOutbound"],
  TokenUpsertWithoutOfferListsWhereOutboundInput: ["update", "create"],
  TokenUpdateWithoutOfferListsWhereOutboundInput: ["id", "symbol", "name", "decimals", "chain", "offerListsWhereInbound"],
  OfferUpsertWithWhereUniqueWithoutOfferListInput: ["where", "update", "create"],
  OfferUpdateWithWhereUniqueWithoutOfferListInput: ["where", "data"],
  OfferUpdateManyWithWhereWithoutOfferListInput: ["where", "data"],
  TakerApprovalUpsertWithWhereUniqueWithoutOfferListInput: ["where", "update", "create"],
  TakerApprovalUpdateWithWhereUniqueWithoutOfferListInput: ["where", "data"],
  TakerApprovalUpdateManyWithWhereWithoutOfferListInput: ["where", "data"],
  OrderUpsertWithWhereUniqueWithoutOfferListInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutOfferListInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutOfferListInput: ["where", "data"],
  MangroveCreateWithoutOffersInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "orders", "makerBalances", "takerApprovals"],
  MangroveCreateOrConnectWithoutOffersInput: ["where", "create"],
  OfferListCreateWithoutOffersInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "takerApprovals", "orders"],
  OfferListCreateOrConnectWithoutOffersInput: ["where", "create"],
  AccountCreateWithoutOffersInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "orders", "makerBalances"],
  AccountCreateOrConnectWithoutOffersInput: ["where", "create"],
  MangroveUpsertWithoutOffersInput: ["update", "create"],
  MangroveUpdateWithoutOffersInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "orders", "makerBalances", "takerApprovals"],
  OfferListUpsertWithoutOffersInput: ["update", "create"],
  OfferListUpdateWithoutOffersInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "takerApprovals", "orders"],
  AccountUpsertWithoutOffersInput: ["update", "create"],
  AccountUpdateWithoutOffersInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "orders", "makerBalances"],
  TakenOfferCreateWithoutOrderInput: ["id", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferCreateOrConnectWithoutOrderInput: ["where", "create"],
  TakenOfferCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
  MangroveCreateWithoutOrdersInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "makerBalances", "takerApprovals"],
  MangroveCreateOrConnectWithoutOrdersInput: ["where", "create"],
  OfferListCreateWithoutOrdersInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals"],
  OfferListCreateOrConnectWithoutOrdersInput: ["where", "create"],
  AccountCreateWithoutOrdersInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "makerBalances"],
  AccountCreateOrConnectWithoutOrdersInput: ["where", "create"],
  TakenOfferUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
  TakenOfferUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
  TakenOfferUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
  TakenOfferScalarWhereInput: ["AND", "OR", "NOT", "id", "orderId", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  MangroveUpsertWithoutOrdersInput: ["update", "create"],
  MangroveUpdateWithoutOrdersInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "chain", "offerLists", "offers", "makerBalances", "takerApprovals"],
  OfferListUpsertWithoutOrdersInput: ["update", "create"],
  OfferListUpdateWithoutOrdersInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "outboundToken", "offers", "takerApprovals"],
  AccountUpsertWithoutOrdersInput: ["update", "create"],
  AccountUpdateWithoutOrdersInput: ["id", "address", "ownedTakerApprovals", "spenderTakerApprovals", "offers", "makerBalances"],
  OrderCreateWithoutTakenOffersInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "mangrove", "offerList", "taker"],
  OrderCreateOrConnectWithoutTakenOffersInput: ["where", "create"],
  OrderUpsertWithoutTakenOffersInput: ["update", "create"],
  OrderUpdateWithoutTakenOffersInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "mangrove", "offerList", "taker"],
  MangroveCreateManyChainInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead"],
  TokenCreateManyChainInput: ["id", "symbol", "name", "decimals"],
  MangroveUpdateWithoutChainInput: ["id", "address", "governance", "monitor", "vault", "useOracle", "notify", "gasmax", "gasprice", "dead", "offerLists", "offers", "orders", "makerBalances", "takerApprovals"],
  TokenUpdateWithoutChainInput: ["id", "symbol", "name", "decimals", "offerListsWhereInbound", "offerListsWhereOutbound"],
  OfferListCreateManyInboundTokenInput: ["id", "mangroveId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListCreateManyOutboundTokenInput: ["id", "mangroveId", "inboundTokenId", "active", "fee", "gasbase", "density"],
  OfferListUpdateWithoutInboundTokenInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferListUpdateWithoutOutboundTokenInput: ["id", "active", "fee", "gasbase", "density", "mangrove", "inboundToken", "offers", "takerApprovals", "orders"],
  OfferListCreateManyMangroveInput: ["id", "inboundTokenId", "outboundTokenId", "active", "fee", "gasbase", "density"],
  OfferCreateManyMangroveInput: ["id", "blockNumber", "time", "offerListId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OrderCreateManyMangroveInput: ["id", "blockNumber", "time", "offerListId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  MakerBalanceCreateManyMangroveInput: ["id", "makerId", "balance"],
  TakerApprovalCreateManyMangroveInput: ["id", "offerListId", "ownerId", "spenderId", "value"],
  OfferListUpdateWithoutMangroveInput: ["id", "active", "fee", "gasbase", "density", "inboundToken", "outboundToken", "offers", "takerApprovals", "orders"],
  OfferUpdateWithoutMangroveInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "offerList", "maker"],
  OrderUpdateWithoutMangroveInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "offerList", "taker"],
  MakerBalanceUpdateWithoutMangroveInput: ["id", "balance", "maker"],
  TakerApprovalUpdateWithoutMangroveInput: ["id", "value", "offerList", "owner", "spender"],
  TakerApprovalCreateManyOwnerInput: ["id", "mangroveId", "offerListId", "spenderId", "value"],
  TakerApprovalCreateManySpenderInput: ["id", "mangroveId", "offerListId", "ownerId", "value"],
  OfferCreateManyMakerInput: ["id", "blockNumber", "time", "offerListId", "mangroveId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  OrderCreateManyTakerInput: ["id", "blockNumber", "time", "mangroveId", "offerListId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  MakerBalanceCreateManyMakerInput: ["id", "mangroveId", "balance"],
  TakerApprovalUpdateWithoutOwnerInput: ["id", "value", "mangrove", "offerList", "spender"],
  TakerApprovalUpdateWithoutSpenderInput: ["id", "value", "mangrove", "offerList", "owner"],
  OfferUpdateWithoutMakerInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "offerList"],
  OrderUpdateWithoutTakerInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "offerList"],
  MakerBalanceUpdateWithoutMakerInput: ["id", "balance", "mangrove"],
  OfferCreateManyOfferListInput: ["id", "blockNumber", "time", "mangroveId", "makerId", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned"],
  TakerApprovalCreateManyOfferListInput: ["id", "mangroveId", "ownerId", "spenderId", "value"],
  OrderCreateManyOfferListInput: ["id", "blockNumber", "time", "mangroveId", "takerId", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty"],
  OfferUpdateWithoutOfferListInput: ["id", "blockNumber", "time", "prevOfferId", "wants", "wantsNumber", "gives", "givesNumber", "takerPaysPrice", "makerPaysPrice", "gasprice", "gasreq", "live", "deprovisioned", "mangrove", "maker"],
  TakerApprovalUpdateWithoutOfferListInput: ["id", "value", "mangrove", "owner", "spender"],
  OrderUpdateWithoutOfferListInput: ["id", "blockNumber", "time", "takerGot", "takerGotNumber", "takerGave", "takerGaveNumber", "takerPaidPrice", "makerPaidPrice", "penalty", "takenOffers", "mangrove", "taker"],
  TakenOfferCreateManyOrderInput: ["id", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"],
  TakenOfferUpdateWithoutOrderInput: ["id", "takerWants", "takerWantsNumber", "takerGives", "takerGivesNumber", "takerPaysPrice", "makerPaysPrice", "posthookFailed", "failReason"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

