import {UserDriverPort} from "./ports/user-driver.port";
import type {UserDTO} from "./business/dtos/user.dto";
import {UserDrivenPort} from "./ports/user-driven.port";
import {UserUriResourceConstant} from "./business/constants/user-uri-resource.constant";
import {UserMapperService} from "./business/services/user-mapper/user-mapper.service";

export function UserService(reader: UserDrivenPort): UserDriverPort {

    async function getUserGitHubData(): Promise<UserDTO> {
        const response = await reader.get(UserUriResourceConstant.USER);
        return UserMapperService.mapToUserDTO(response);
    }

    return {
        getUserGitHubData
    };
}
