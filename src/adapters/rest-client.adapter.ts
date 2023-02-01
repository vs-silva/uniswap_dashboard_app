import type {UserDrivenPort} from "../domain/user/ports/user-driven.port";
import ApiEngine from '../infrastructure/api-engine';

export function RestClientAdapter(): UserDrivenPort {

    const endpoint = 'https://api.github.com';

    async function get(resourceURI: string): Promise<object> {
        const response = await ApiEngine.get(`${endpoint}${resourceURI}`);
        return response['data'];
    }

    return {
      get
    };
}
