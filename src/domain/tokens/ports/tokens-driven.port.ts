import type {TokensRequestQueryDTO} from "../business/dtos/tokens-request-query.dto";

export interface TokensDrivenPort {
    get(requestQuery: TokensRequestQueryDTO): Promise<object>;
}
