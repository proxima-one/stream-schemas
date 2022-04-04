import * as models from "./model"
import { EventStreamSchema, serializers } from "@proxima-one/stream-schema-base";


export type MangroveDomainEvent = models.DomainEvent


export const fungibleToken: EventStreamSchema<MangroveDomainEvent> = {
    name: "mangrove-streams.streams.proxima.one",
    serdes: serializers.json<MangroveDomainEvent>(),
    version: "0.1.0",
  }