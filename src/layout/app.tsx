import {Router} from "../router";
import {Navigation} from "../components/navigation";

export default function App() {
    return(<div className="container mx-auto">
        <Navigation />
        <Router />
    </div>);
}
