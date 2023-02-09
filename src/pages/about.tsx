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
        <div
            className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            <div className="px-6 pt-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="relative">
                            <img
                                src={user.thumbImage}
                                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div className="p-3 text-center">
                                <a href="https://github.com/vs-silva/" target="_blank"
                                ><img src="/icons8-github-48.png" alt="github icon" className="object-center" title="visit github projects"/>
                                </a>
                            </div>
                            <div className="p-3 text-center">
                                <a href="https://www.linkedin.com/in/vitalinosilva/" target="_blank"
                                ><img src="/icons8-linkedin-48.png" alt="linkedin icon" className="object-center" title="visit linkedin profile"/>
                                </a>
                            </div>

                            <div className="p-3 text-center">
                                <a href="https://vitalinosilva.com/wp-content/uploads/2023/02/Resume-Vitalino-Silva.pdf" target="_blank"
                                ><img src="/resumeIcon.png" alt="resume icon" className="object-center" title="download resume"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{user.name}</h3>
                    <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        Fullstack Javascript Engineer
                    </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <p className="font-light leading-relaxed text-slate-600 mb-4">Vitalino Silva is a Fullstack Javascript engineer interested in software architecture and web development.</p>
                            <a href={user.bio} target="_blank" className="font-normal text-slate-700 hover:text-slate-400">Bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
