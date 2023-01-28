import ApiEngine from '../infrastructure/api-engine';
import {CryptoTokensDrivenPort} from "../domain/crypto-tokens/ports/crypto-tokens-driven.port";
import {CryptoTokensRequestQueryDTO} from "../domain/crypto-tokens/business/dtos/crypto-tokens-request-query.dto";

export function GraphqlClientAdapter(): CryptoTokensDrivenPort {

    const endpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

    async function get(requestQuery: CryptoTokensRequestQueryDTO): Promise<object> {
        const response = await ApiEngine.post(endpoint, requestQuery);
        return response['data']['data'];
    }

    return {
        get
    };
}
