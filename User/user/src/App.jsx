import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Router from "./router";



export default function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}
