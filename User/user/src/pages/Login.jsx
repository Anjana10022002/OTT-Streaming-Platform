

function Login() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Log In</h2>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="btn primary">Login</button>
                <p>Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
        </div>
    );
}

export default Login;
