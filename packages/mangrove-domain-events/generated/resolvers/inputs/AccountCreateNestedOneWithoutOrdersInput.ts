import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutOrdersInput } from "../inputs/AccountCreateOrConnectWithoutOrdersInput";
import { AccountCreateWithoutOrdersInput } from "../inputs/AccountCreateWithoutOrdersInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class AccountCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: AccountCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
