// function ChangePassword() {
//     return (
//         <>
//             <div className="auth-page">
//                 <div className="auth-card">
//                     <h2>Change Password</h2>

//                     <input type="password" placeholder="Current Password" />
//                     <input type="password" placeholder="New Password" />
//                     <input type="password" placeholder="Confirm New Password" />

//                     <button>Update Password</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ChangePassword;

import { useState } from "react";
import axios from "axios";

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleChangePassword() {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage("All fields are required");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("New passwords do not match");
            return;
        }

        axios.post(
            "http://127.0.0.1:8000/userapi/changePassword/",
            {
                current_password: currentPassword,
                new_password: newPassword,
            },
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            }
        )
        .then(() => {
            setMessage("Password updated successfully");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        })
        .catch(err => {
            console.error(err);
            setMessage(
                err.response?.data?.message || "Password update failed"
            );
        });
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Change Password</h2>

                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={e => setCurrentPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />

                {message && <p className="auth-message">{message}</p>}

                <button onClick={handleChangePassword}>
                    Update Password
                </button>
            </div>
        </div>
    );
}

export default ChangePassword;
