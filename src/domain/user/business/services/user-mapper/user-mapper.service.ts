import {UserMapperInterface} from "./user-mapper.interface";
import type {UserDTO} from "../../dtos/user.dto";
import {UserRequestedFieldsConstants} from "../../constants/user-requested-fields.constants";

function mapToUserDTO(data: object): UserDTO {

    return <UserDTO>{
        // @ts-ignore
        id: parseInt(data[`${UserRequestedFieldsConstants.ID}`]),
        // @ts-ignore
        name: data[`${UserRequestedFieldsConstants.NAME}`],
        // @ts-ignore
        thumbImage: data[`${UserRequestedFieldsConstants.THUMB_IMAGE}`],
        // @ts-ignore
        bio: data[`${UserRequestedFieldsConstants.BIO}`]
    };
}

export const UserMapperService: UserMapperInterface = Object.freeze({
   mapToUserDTO
});
