import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    var [name, setName] = useState(''); 
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
         if (password !== passwordConf) {
            setErrorMessage("Passwords do not match");
            return;
        }
        axios.post('http://127.0.0.1:8000/userapi/signup/',user).then(response=>{
            setErrorMessage('');
            navigate('/');
        })
        .catch((error) => {
    console.error(error);

    if (error.response && error.response.data) {
        setErrorMessage(
            error.response.data.message ||
            JSON.stringify(error.response.data)
        );
    } else {
        setErrorMessage("Server not reachable");
    }
});
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Create Account</h2>

                {errorMessage && (
                    <p className="error-text">{errorMessage}</p>
                )}

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConf}
                    onChange={(event) => setPasswordConf(event.target.value)}
                />

                <button className="btn primary" onClick={registerUser}>
                    Sign Up
                </button>

                <p>
                    Already have an account? <a href="/login">Log In</a>
                </p>
            </div>
        </div>
    );
}
export default Register;

