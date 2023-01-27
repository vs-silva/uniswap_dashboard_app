import type {RequestQueryInterface} from "./request-query.interface";
import type {CryptoTokensRequestParameterDTO} from "../../dtos/crypto-tokens-request-parameter.dto";
import type {TokensRequestQueryDTO} from "../../dtos/tokens-request-query.dto";

function generateRequestQuery(requestParameters: CryptoTokensRequestParameterDTO): TokensRequestQueryDTO {

    return {
        operationName: 'tokens',
        query: `query { 
            tokens(where: {name_contains: "${requestParameters.name}"}, orderBy: ${requestParameters.orderBy}, orderDirection: ${requestParameters.orderDirection}, first: ${requestParameters.amount}, skip: ${requestParameters.skip}) {
                id,
                name,
                symbol,
                totalSupply,
                totalValueLockedUSD
                }}`,
        variables: {}
    };
}

export const RequestQueryService: RequestQueryInterface = Object.freeze({
    generateRequestQuery
});
