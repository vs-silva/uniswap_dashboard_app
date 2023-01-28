import type {TokensDrivenPort} from "../domain/tokens/ports/tokens-driven.port";
import type {TokensRequestQueryDTO} from "../domain/tokens/business/dtos/tokens-request-query.dto";
import ApiEngine from '../infrastructure/api-engine';

export function GraphqlClientAdapter(): TokensDrivenPort {

    const endpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

    async function get(requestQuery: TokensRequestQueryDTO): Promise<object> {
        const response = await ApiEngine.post(endpoint, requestQuery);
        return response['data']['data'];
    }

    return {
        get
    };
}
