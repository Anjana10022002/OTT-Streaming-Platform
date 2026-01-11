import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
            <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>OTT Platform</h3>
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link to="/">Home</Link>
                    <Link to="/watchlist">Watchlist</Link>
                    <Link to="/history">History</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;