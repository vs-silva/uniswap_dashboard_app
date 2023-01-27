import type {TokensDriverPort} from "./ports/tokens-driver.port";
import type {TokensDrivenPort} from "./ports/tokens-driven.port";
import type {CryptoTokenDTO} from "./business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "./business/dtos/crypto-tokens-request-parameter.dto";

export function TokensService(reader: TokensDrivenPort): TokensDriverPort {

    async function getCryptoTokens(requestParameters: CryptoTokensRequestParameterDTO): Promise<CryptoTokenDTO[]> {

        return Promise.reject(null);
    }

    return {
        getCryptoTokens
    };
}
