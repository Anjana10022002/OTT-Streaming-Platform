import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-inner">
                <h3>OTT Platform</h3>

                <div className="nav-links">
                    <Link to="/home">Home</Link>
                    <Link to="/watchlist">Watchlist</Link>
                    <Link to="/history">History</Link>

                    <div className="profile-wrapper">
                        <button
                            className="profile-btn"
                            onClick={() => setOpen(!open)}
                        >
                            Profile ▾
                        </button>

                        {open && (
                            <div className="profile-dropdown">
                                <Link to="/change-password">Change Password</Link>
                                <button className="logout-btn">Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
