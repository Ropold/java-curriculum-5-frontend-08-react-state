import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Characters from "./components/Characters.tsx";
import {Planets} from "./components/Planets.tsx";


export default function App() {

    return (<>
        <Home />
            <Routes>
                <Route path="/characters" element={<Characters />} />
                <Route path="/planets" element={<Planets />}/>
            </Routes>
        </>

    );
}
