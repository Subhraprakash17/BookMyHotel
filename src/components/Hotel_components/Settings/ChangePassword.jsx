import React, { useState } from 'react';

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmNewPassword) {
            alert('New password and confirm password do not match!');
            return;
        }
        if (passwords.newPassword.length < 8) {
            alert('New password must be at least 8 characters long!');
            return;
        }

        // In a real application, send currentPassword and newPassword to backend
        // Backend would verify currentPassword and then update to newPassword
        console.log('Attempting to change password:', passwords);
        alert('Password changed successfully! (Simulated)');
        setPasswords({ // Reset form
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        });
    };

    return (
        <div className="setting-section change-password-section">
            <h3 className="setting-title">Change Password</h3>
            <div className="password-change-card">
                <form onSubmit={handleSubmit} className="password-form">
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current Password:</label>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            value={passwords.currentPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={passwords.newPassword}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                        <input
                            type="password"
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            value={passwords.confirmNewPassword}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>
                    <button type="submit" className="action-button primary-button">Change Password</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;