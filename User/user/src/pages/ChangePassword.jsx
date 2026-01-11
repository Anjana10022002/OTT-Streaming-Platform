function ChangePassword() {
    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h2>Change Password</h2>
            <input type="password" placeholder="Old Password" />
            <input type="password" placeholder="New Password" />
            <button className="btn">Update</button>
        </div>
    );
}

export default ChangePassword;
