function Register() {
    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h2>Register</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />    
            <button className="btn">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}
export default Register;
