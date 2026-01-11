function Register() {
    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h2>Register</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}
export default Register;
