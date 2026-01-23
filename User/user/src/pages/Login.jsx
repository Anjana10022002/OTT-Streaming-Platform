import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function attemptLogin() {
        setErrorMessage("");

        axios.post("http://127.0.0.1:8000/userapi/login/", {
            email: email,
            password: password,
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", email);

            navigate("/home");
        })
        .catch((error) => {
            if (error.response && error.response.data) {
                setErrorMessage(
                    error.response.data.error ||
                    error.response.data.message ||
                    "Invalid login credentials"
                );
            } else {
                setErrorMessage("Server not reachable");
            }
        });
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Log In</h2>

                {errorMessage && (
                    <p className="error-text">{errorMessage}</p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button className="btn primary" onClick={attemptLogin}>
                    Login
                </button>

                <p>
                    Don't have an account? <a href="/register">Sign Up</a>
                </p>
            </div>
        </div>
    );
    }

export default Login;