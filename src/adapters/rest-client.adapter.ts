import type {UserDrivenPort} from "../domain/user/ports/user-driven.port";
import APIEngineAdapter from './api-engine.adapter';

export function RestClientAdapter(): UserDrivenPort {

    const endpoint = 'https://api.github.com';

    async function get(resourceURI: string): Promise<object> {
        const response = await APIEngineAdapter.get(`${endpoint}${resourceURI}`);
        return response['data'];
    }

    return {
      get
    };
}
