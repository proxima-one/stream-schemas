import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutSpenderTakerApprovalsInput } from "../inputs/AccountCreateOrConnectWithoutSpenderTakerApprovalsInput";
import { AccountCreateWithoutSpenderTakerApprovalsInput } from "../inputs/AccountCreateWithoutSpenderTakerApprovalsInput";
import { AccountUpdateWithoutSpenderTakerApprovalsInput } from "../inputs/AccountUpdateWithoutSpenderTakerApprovalsInput";
import { AccountUpsertWithoutSpenderTakerApprovalsInput } from "../inputs/AccountUpsertWithoutSpenderTakerApprovalsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput", {
  isAbstract: true
})
export class AccountUpdateOneRequiredWithoutSpenderTakerApprovalsInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutSpenderTakerApprovalsInput, {
    nullable: true
  })
  create?: AccountCreateWithoutSpenderTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutSpenderTakerApprovalsInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutSpenderTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutSpenderTakerApprovalsInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutSpenderTakerApprovalsInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutSpenderTakerApprovalsInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutSpenderTakerApprovalsInput | undefined;
}
