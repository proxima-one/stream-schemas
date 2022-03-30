import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateOrConnectWithoutOwnedTakerApprovalsInput";
import { AccountCreateWithoutOwnedTakerApprovalsInput } from "../inputs/AccountCreateWithoutOwnedTakerApprovalsInput";
import { AccountUpdateWithoutOwnedTakerApprovalsInput } from "../inputs/AccountUpdateWithoutOwnedTakerApprovalsInput";
import { AccountUpsertWithoutOwnedTakerApprovalsInput } from "../inputs/AccountUpsertWithoutOwnedTakerApprovalsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput", {
  isAbstract: true
})
export class AccountUpdateOneRequiredWithoutOwnedTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  create?: AccountCreateWithoutOwnedTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutOwnedTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutOwnedTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutOwnedTakerApprovalsInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutOwnedTakerApprovalsInput | undefined;
}
