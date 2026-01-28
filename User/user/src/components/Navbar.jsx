import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("email");   // if stored
        setOpen(false);
        navigate("/login");
    }

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
                                <Link to="/change-password">
                                    Change Password
                                </Link>

                                <button
                                    className="logout-btn"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
