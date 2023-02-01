import {useEffect, useState} from "react";
import User from "../domain/user";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import {UserDTO} from "../domain/user/business/dtos/user.dto";

export function About(): JSX.Element {

    const initialValue: UserDTO = {
        id: 0,
        name: '',
        thumbImage: '',
        bio: ''
    };

    const [user, setUser] = useState(initialValue);

    useEffect(() => {

        User.getUserGitHubData()
            .then(setUser)
            .catch(error => (Eventbus.emit(EventTypesConstants.DATA_FETCH_ERROR, error)));

    }, []);


    // @ts-ignore
    return (<div>
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={user.thumbImage} alt="avatar"/>
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Fullstack Javascript Engineer</h5>
                    <p className="text-gray-700 text-base mb-12">
                        {user.name}
                    </p>
                    <a href={user.bio} target="_blank"
                        className="text-center inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">About Me
                    </a>
                </div>
            </div>
        </div>
    </div>);
}
