import type {UserDTO} from "../business/dtos/user.dto";

export interface UserDriverPort {
    getUserGitHubData(): Promise<UserDTO>;
}
