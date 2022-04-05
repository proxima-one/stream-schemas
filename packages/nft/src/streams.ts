import * as eventsErc721 from "./eventsErc721";
import * as eventsCryptoPunks from "./eventsCryptoPunks";
import { EventStreamSchema, serializers } from "@proximaone/stream-schema-base";
import { ChainReference } from "./model";

export type Erc721StreamEvent =
  | eventsErc721.NewNftCollection
  | eventsErc721.Approval
  | eventsErc721.ApprovalForAll
  | eventsErc721.Transfer & {
  ref?: ChainReference
};

export type CryptoPunksEvent =
  | eventsCryptoPunks.Assign
  | eventsCryptoPunks.FundTransfer
  | eventsCryptoPunks.PunkTransfer
  | eventsCryptoPunks.PunkOffered
  | eventsCryptoPunks.PunkBidEntered
  | eventsCryptoPunks.PunkBidWithdrawn
  | eventsCryptoPunks.PunkBought
  | eventsCryptoPunks.PunkNoLongerForSale & {
  ref?: ChainReference
};

export const erc721: EventStreamSchema<Erc721StreamEvent> = {
  name: "erc721.nft.streams.proxima.one",
  serdes: serializers.json<Erc721StreamEvent>(),
  version: "0.1.0",
}

export const cryptoPunks: EventStreamSchema<CryptoPunksEvent> = {
  name: "crypto-punks.nft.streams.proxima.one",
  serdes: serializers.json<CryptoPunksEvent>(),
  version: "0.1.0",
}
