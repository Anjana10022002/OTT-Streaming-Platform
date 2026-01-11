function Login() {
    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn">Login</button>
            <p>Don't have an account? <a href="/register">Register</a>  </p>
        </div>
    );
}
export default Login;
