import type {CryptoTokensRequestQueryDto} from "../business/dtos/crypto-tokens-request-query.dto";

export interface CryptoTokensDrivenPort {
    get(requestQuery: CryptoTokensRequestQueryDto): Promise<object>;
}
