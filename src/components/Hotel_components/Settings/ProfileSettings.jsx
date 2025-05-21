import React, { useState } from 'react';

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        fullName: 'Admin User',
        email: 'admin.user@hotel.com',
        phoneNumber: '+91 98765 43210',
        role: 'Hotel Administrator',
        department: 'Management',
        joinedDate: '2023-01-15',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend API
        alert('Profile updated successfully!');
        setIsEditing(false);
        console.log('Saved Profile:', profile);
    };

    const handleCancel = () => {
        // Reset to original data or last saved data
        // For simplicity, we'll just toggle editing off. In a real app, you might fetch initial data again.
        setIsEditing(false);
    };

    return (
        <div className="setting-section profile-settings-section">
            <h3 className="setting-title">Profile Settings</h3>
            <div className="profile-card">
                {!isEditing ? (
                    <div className="profile-display">
                        <div className="profile-item">
                            <strong>Full Name:</strong> <span>{profile.fullName}</span>
                        </div>
                        <div className="profile-item">
                            <strong>Email:</strong> <span>{profile.email}</span>
                        </div>
                        <div className="profile-item">
                            <strong>Phone Number:</strong> <span>{profile.phoneNumber}</span>
                        </div>
                        <div className="profile-item">
                            <strong>Role:</strong> <span>{profile.role}</span>
                        </div>
                        <div className="profile-item">
                            <strong>Department:</strong> <span>{profile.department}</span>
                        </div>
                        <div className="profile-item">
                            <strong>Joined Date:</strong> <span>{profile.joinedDate}</span>
                        </div>
                        <button onClick={() => setIsEditing(true)} className="action-button primary-button edit-button">
                            Edit Profile
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSave} className="profile-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={profile.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={profile.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role:</label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={profile.role}
                                onChange={handleChange}
                                disabled // Role often not editable by user
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department:</label>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                value={profile.department}
                                onChange={handleChange}
                                disabled // Department often not editable by user
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="joinedDate">Joined Date:</label>
                            <input
                                type="date"
                                id="joinedDate"
                                name="joinedDate"
                                value={profile.joinedDate}
                                onChange={handleChange}
                                disabled // Joined date not editable
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="action-button primary-button">Save Changes</button>
                            <button type="button" onClick={handleCancel} className="action-button secondary-button">Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ProfileSettings;