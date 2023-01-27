import type {CryptoTokenDTO} from "../business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "../business/dtos/crypto-tokens-request-parameter.dto";

export interface TokensDriverPort {
    getCryptoTokens(requestParameters: CryptoTokensRequestParameterDTO): Promise<CryptoTokenDTO[]>
}
