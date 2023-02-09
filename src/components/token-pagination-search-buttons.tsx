import {useState} from "react";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";

export function TokenPaginationSearchButtons(): JSX.Element {


    const [prevButtonId] = useState('paginationPrevBtn');
    const [nextButtonId] = useState('paginationNextBtn');


    return (<div className="flex">
        <button id={prevButtonId}
        className="bg-white hover:bg-gray-100 text-gray-700 font-normal text-base px-4 border border-gray-300 rounded w-full mr-2"
                onClick={(event) => {
                    event.preventDefault();
                    Eventbus.emit(EventTypesConstants.UPDATE_PAGINATION, 'prev');
                }}
        >previous tokens</button>

        <button id={nextButtonId}
        className="bg-white hover:bg-gray-100 text-gray-700 font-normal text-base px-4 border border-gray-300 rounded w-full"
                onClick={(event) => {
                    event.preventDefault();
                    Eventbus.emit(EventTypesConstants.UPDATE_PAGINATION, 'next');
                }}
        >next tokens</button>
    </div>);
}
