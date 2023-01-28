import {useState} from "react";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";

export function Loader(): JSX.Element {

    const [loading, setLoading] = useState(false);

    Eventbus.on(EventTypesConstants.SHOW_LOADER, () => setLoading(true));
    Eventbus.on(EventTypesConstants.HIDE_LOADER, () => setLoading(false));

    if(!loading) {
        return (<></>);
    }

    return (<div data-testid="loader">
        <p>Loading...</p>
    </div>);
}
