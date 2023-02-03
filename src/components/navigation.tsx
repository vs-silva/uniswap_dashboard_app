import {RouterPaths} from "../router/router-paths";
import {Link} from "react-router-dom";

export function Navigation(): JSX.Element {

    return (
        <div className="container-fluid w-full flex flex-wrap items-center justify-between py-8">
            <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb" data-testid="nav">
                {
                    Object.entries(RouterPaths).map(([routeKey, routePath], index) => (
                        <Link className="text-gray-500 hover:text-gray-600 mr-4" to={routePath} key={index}>{routeKey}</Link>
                    ))
                }
            </nav>
        </div>);
}
