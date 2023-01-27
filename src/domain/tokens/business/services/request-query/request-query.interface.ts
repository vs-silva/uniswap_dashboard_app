import type {TokensRequestQueryDTO} from "../../dtos/tokens-request-query.dto";
import type {CryptoTokensRequestParameterDTO} from "../../dtos/crypto-tokens-request-parameter.dto";

export interface RequestQueryInterface {
    generateRequestQuery(requestParameters: CryptoTokensRequestParameterDTO): TokensRequestQueryDTO
}
