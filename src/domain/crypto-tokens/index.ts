import {CryptoTokensService} from "./crypto-tokens.service";
import {GraphqlClientAdapter} from "../../adapters/graphql-client.adapter";

export default CryptoTokensService(GraphqlClientAdapter());
