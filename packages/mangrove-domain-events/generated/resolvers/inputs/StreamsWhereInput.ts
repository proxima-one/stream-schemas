import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StreamsWhereInput", {
  isAbstract: true
})
export class StreamsWhereInput {
  @TypeGraphQL.Field(_type => [StreamsWhereInput], {
    nullable: true
  })
  AND?: StreamsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StreamsWhereInput], {
    nullable: true
  })
  OR?: StreamsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StreamsWhereInput], {
    nullable: true
  })
  NOT?: StreamsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  state?: StringFilter | undefined;
}
