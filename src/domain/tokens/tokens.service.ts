import type {TokensDriverPort} from "./ports/tokens-driver.port";
import type {TokensDrivenPort} from "./ports/tokens-driven.port";
import type {CryptoTokenDTO} from "./business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "./business/dtos/crypto-tokens-request-parameter.dto";
import {RequestQueryService} from "./business/services/request-query/request-query.service";
import {TokensMapperService} from "./business/services/tokens-mapper/tokens-mapper.service";

export function TokensService(reader: TokensDrivenPort): TokensDriverPort {

    async function getCryptoTokens(requestParameters: CryptoTokensRequestParameterDTO): Promise<CryptoTokenDTO[]> {

        const requestQuery = RequestQueryService.generateRequestQuery(requestParameters);

        const response = await reader.get(requestQuery);

        // @ts-ignore
        return TokensMapperService.mapToCryptoTokenDTOCollection(response['tokens']);
    }

    return {
        getCryptoTokens
    };
}
