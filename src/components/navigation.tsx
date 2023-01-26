import {RouterPaths} from "../router/router-paths";
import {Link} from "react-router-dom";

export function Navigation(): JSX.Element {

    return (<nav>
        {
            Object.entries(RouterPaths).map(([routeKey, routePath], index) => (
                <Link to={routePath} key={index}>{routeKey}</Link>
            ))
        }
    </nav>);
}
