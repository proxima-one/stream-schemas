import * as models from "../generated/models"
import { EventStreamSchema, serializers } from "@proxima-one/stream-schema-base";


export type MangroveDomainModel = models.Account | models.MakerBalance | models.Mangrove | 
models.Chain | models.Offer | models.OfferList | models.Order | models.Streams | models.TakenOffer | models.TakerApproval


export const fungibleToken: EventStreamSchema<MangroveDomainModel> = {
    name: "mangrove-domain-model.streams.proxima.one",
    serdes: serializers.json<MangroveDomainModel>(),
    version: "0.1.0",
  }