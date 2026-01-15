function ChangePassword() {
    return (
        <>
            <div className="auth-page">
                <div className="auth-card">
                    <h2>Change Password</h2>

                    <input type="password" placeholder="Current Password" />
                    <input type="password" placeholder="New Password" />
                    <input type="password" placeholder="Confirm New Password" />

                    <button>Update Password</button>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
