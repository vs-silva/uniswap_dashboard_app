import type {CryptoTokensDriverPort} from "./ports/crypto-tokens-driver.port";
import type {CryptoTokensDrivenPort} from "./ports/crypto-tokens-driven.port";
import type {CryptoTokenDTO} from "./business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "./business/dtos/crypto-tokens-request-parameter.dto";
import {RequestQueryService} from "./business/services/request-query/request-query.service";
import {CryptoTokensMapperService} from "./business/services/crypto-tokens-mapper/crypto-tokens-mapper.service";

export function CryptoTokensService(reader: CryptoTokensDrivenPort): CryptoTokensDriverPort {

    async function getCryptoTokens(requestParameters: CryptoTokensRequestParameterDTO): Promise<CryptoTokenDTO[]> {

        const requestQuery = RequestQueryService.generateRequestQuery(requestParameters);

        const response = await reader.get(requestQuery);

        // @ts-ignore
        return CryptoTokensMapperService.mapToCryptoTokenDTOCollection(response['tokens']);
    }

    return {
        getCryptoTokens
    };
}
