import {TokensService} from "./tokens.service";
import {GraphqlClientAdapter} from "../../adapters/graphql-client.adapter";

export default TokensService(GraphqlClientAdapter());
