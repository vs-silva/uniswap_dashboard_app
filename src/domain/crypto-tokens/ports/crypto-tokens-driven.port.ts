import type {CryptoTokensRequestQueryDTO} from "../business/dtos/crypto-tokens-request-query.dto";

export interface CryptoTokensDrivenPort {
    get(requestQuery: CryptoTokensRequestQueryDTO): Promise<object>;
}
