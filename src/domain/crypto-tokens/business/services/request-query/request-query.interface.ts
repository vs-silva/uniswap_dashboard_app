import type {CryptoTokensRequestQueryDTO} from "../../dtos/crypto-tokens-request-query.dto";
import type {CryptoTokensRequestParameterDTO} from "../../dtos/crypto-tokens-request-parameter.dto";

export interface RequestQueryInterface {
    generateRequestQuery(requestParameters: CryptoTokensRequestParameterDTO): CryptoTokensRequestQueryDTO
}
