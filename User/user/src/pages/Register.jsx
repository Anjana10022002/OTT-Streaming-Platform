function Register() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Create Account</h2>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />

                <button className="btn primary">Sign Up</button>
                <p>Don't have an account? <a href="/login">Log In</a></p>
            </div>
        </div>
    );
}
export default Register;
