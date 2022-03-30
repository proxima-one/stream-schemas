import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutOrdersInput } from "../inputs/AccountCreateOrConnectWithoutOrdersInput";
import { AccountCreateWithoutOrdersInput } from "../inputs/AccountCreateWithoutOrdersInput";
import { AccountUpdateWithoutOrdersInput } from "../inputs/AccountUpdateWithoutOrdersInput";
import { AccountUpsertWithoutOrdersInput } from "../inputs/AccountUpsertWithoutOrdersInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneRequiredWithoutOrdersInput", {
  isAbstract: true
})
export class AccountUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: AccountCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutOrdersInput | undefined;
}
