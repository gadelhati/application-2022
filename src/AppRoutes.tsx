import { Route, BrowserRouter, Routes } from "react-router-dom";
import Observation from "./components/Observation";
import Observator from "./components/Observator";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/observation" element={<Observation mimi="vixi" />}></Route>
                <Route path="/observator" element={<Observator />}></Route>
            </Routes>
        </BrowserRouter>
    )
}