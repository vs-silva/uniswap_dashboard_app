import type {TokensDrivenPort} from "../domain/tokens/ports/tokens-driven.port";
import type {TokensRequestQueryDTO} from "../domain/tokens/business/dtos/tokens-request-query.dto";
import axios from "axios";

export function GraphqlClientAdapter(): TokensDrivenPort {

    const endpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

    const engine = axios.create({
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Timeout error. Please verify service availability and network connection.',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    async function  get(requestQuery: TokensRequestQueryDTO): Promise<object> {
        const response = await engine.post(endpoint, requestQuery);
        return response['data']['data'];
    }

    return {
        get
    };
}
