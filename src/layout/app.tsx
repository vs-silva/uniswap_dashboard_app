import {Router} from "../router";
import {Navigation} from "../components/navigation";

export default function App(): JSX.Element {
    return(<div className="container mx-auto" data-testid="app">
        <Navigation />
        <Router />
    </div>);
}
