import {Router} from "../router";
import {Navigation} from "../components/navigation";
import {Loader} from "../components/loader";

export default function App(): JSX.Element {
    return(<div className="container mx-auto" data-testid="app">
        <Loader />
        <Navigation />
        <Router />
    </div>);
}
