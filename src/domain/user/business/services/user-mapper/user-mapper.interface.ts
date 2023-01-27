import {UserDTO} from "../../dtos/user.dto";

export interface UserMapperInterface {
    mapToUserDTO(data: object): UserDTO;
}
