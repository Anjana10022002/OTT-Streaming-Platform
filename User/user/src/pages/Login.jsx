

function Login() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Sign In</h2>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="btn primary">Login</button>
            </div>
        </div>
    );
}

export default Login;
