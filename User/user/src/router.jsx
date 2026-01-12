import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";
import WatchMovie from "./pages/WatchMovie";
import Watchlist from "./pages/Watchlist";
import History from "./pages/History";
import ChangePassword from "./pages/ChangePassword";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/moviedetails" element={<MovieDetails />} />
            <Route path="/watch" element={<WatchMovie />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/history" element={<History />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watch/:id" element={<WatchMovie />} />
        </Routes>
    );
}

export default Router;
