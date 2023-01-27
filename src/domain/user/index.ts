import {UserService} from "./user.service";
import {RestClientAdapter} from "../../adapters/rest-client.adapter";

export default UserService(RestClientAdapter());
