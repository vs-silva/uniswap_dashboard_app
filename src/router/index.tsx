import {Route, Routes} from "react-router-dom";
import {RouterPaths} from "./router-paths";
import {Home} from "../pages/home";
import {Tokens} from "../pages/tokens";
import {About} from "../pages/about";

export function Router() {
    return ( <Routes>
        <Route path={RouterPaths.Home} element={<Home />}/>
        <Route path={RouterPaths.Tokens} element={<Tokens />}/>
        <Route path={RouterPaths.AboutMe} element={<About />}/>
    </Routes>);
}
