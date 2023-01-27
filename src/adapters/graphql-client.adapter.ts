import type {TokensDrivenPort} from "../domain/tokens/ports/tokens-driven.port";
import type {TokensRequestQueryDTO} from "../domain/tokens/business/dtos/tokens-request-query.dto";

export function GraphqlClientAdapter(): TokensDrivenPort {

    async function  get(requestQuery: TokensRequestQueryDTO): Promise<object> {
        return {};
    }

    return {
        get
    };
}
